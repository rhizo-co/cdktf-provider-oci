# `dataOciIdentityIdpGroupMappings` Submodule <a name="`dataOciIdentityIdpGroupMappings` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityIdpGroupMappings <a name="DataOciIdentityIdpGroupMappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_idp_group_mappings oci_identity_idp_group_mappings}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.Initializer"></a>

```typescript
import { dataOciIdentityIdpGroupMappings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings(scope: Construct, id: string, config: DataOciIdentityIdpGroupMappingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsConfig">DataOciIdentityIdpGroupMappingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsConfig">DataOciIdentityIdpGroupMappingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciIdentityIdpGroupMappingsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilter">DataOciIdentityIdpGroupMappingsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityIdpGroupMappings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.isConstruct"></a>

```typescript
import { dataOciIdentityIdpGroupMappings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.isTerraformElement"></a>

```typescript
import { dataOciIdentityIdpGroupMappings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityIdpGroupMappings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.generateConfigForImport"></a>

```typescript
import { dataOciIdentityIdpGroupMappings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityIdpGroupMappings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityIdpGroupMappings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityIdpGroupMappings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_idp_group_mappings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityIdpGroupMappings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterList">DataOciIdentityIdpGroupMappingsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.idpGroupMappings">idpGroupMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsList">DataOciIdentityIdpGroupMappingsIdpGroupMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilter">DataOciIdentityIdpGroupMappingsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.identityProviderId">identityProviderId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.filter"></a>

```typescript
public readonly filter: DataOciIdentityIdpGroupMappingsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterList">DataOciIdentityIdpGroupMappingsFilterList</a>

---

##### `idpGroupMappings`<sup>Required</sup> <a name="idpGroupMappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.idpGroupMappings"></a>

```typescript
public readonly idpGroupMappings: DataOciIdentityIdpGroupMappingsIdpGroupMappingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsList">DataOciIdentityIdpGroupMappingsIdpGroupMappingsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciIdentityIdpGroupMappingsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilter">DataOciIdentityIdpGroupMappingsFilter</a>[]

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.identityProviderIdInput"></a>

```typescript
public readonly identityProviderIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.identityProviderId"></a>

```typescript
public readonly identityProviderId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityIdpGroupMappingsConfig <a name="DataOciIdentityIdpGroupMappingsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsConfig.Initializer"></a>

```typescript
import { dataOciIdentityIdpGroupMappings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityIdpGroupMappingsConfig: dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsConfig.property.identityProviderId">identityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_idp_group_mappings#identity_provider_id DataOciIdentityIdpGroupMappings#identity_provider_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilter">DataOciIdentityIdpGroupMappingsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_idp_group_mappings#id DataOciIdentityIdpGroupMappings#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsConfig.property.identityProviderId"></a>

```typescript
public readonly identityProviderId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_idp_group_mappings#identity_provider_id DataOciIdentityIdpGroupMappings#identity_provider_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciIdentityIdpGroupMappingsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilter">DataOciIdentityIdpGroupMappingsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_idp_group_mappings#filter DataOciIdentityIdpGroupMappings#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_idp_group_mappings#id DataOciIdentityIdpGroupMappings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciIdentityIdpGroupMappingsFilter <a name="DataOciIdentityIdpGroupMappingsFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilter.Initializer"></a>

```typescript
import { dataOciIdentityIdpGroupMappings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityIdpGroupMappingsFilter: dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_idp_group_mappings#name DataOciIdentityIdpGroupMappings#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_idp_group_mappings#values DataOciIdentityIdpGroupMappings#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_idp_group_mappings#regex DataOciIdentityIdpGroupMappings#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_idp_group_mappings#name DataOciIdentityIdpGroupMappings#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_idp_group_mappings#values DataOciIdentityIdpGroupMappings#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_idp_group_mappings#regex DataOciIdentityIdpGroupMappings#regex}.

---

### DataOciIdentityIdpGroupMappingsIdpGroupMappings <a name="DataOciIdentityIdpGroupMappingsIdpGroupMappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappings.Initializer"></a>

```typescript
import { dataOciIdentityIdpGroupMappings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityIdpGroupMappingsIdpGroupMappings: dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappings = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityIdpGroupMappingsFilterList <a name="DataOciIdentityIdpGroupMappingsFilterList" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterList.Initializer"></a>

```typescript
import { dataOciIdentityIdpGroupMappings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterList.get"></a>

```typescript
public get(index: number): DataOciIdentityIdpGroupMappingsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilter">DataOciIdentityIdpGroupMappingsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciIdentityIdpGroupMappingsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilter">DataOciIdentityIdpGroupMappingsFilter</a>[]

---


### DataOciIdentityIdpGroupMappingsFilterOutputReference <a name="DataOciIdentityIdpGroupMappingsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityIdpGroupMappings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilter">DataOciIdentityIdpGroupMappingsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciIdentityIdpGroupMappingsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsFilter">DataOciIdentityIdpGroupMappingsFilter</a>

---


### DataOciIdentityIdpGroupMappingsIdpGroupMappingsList <a name="DataOciIdentityIdpGroupMappingsIdpGroupMappingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsList.Initializer"></a>

```typescript
import { dataOciIdentityIdpGroupMappings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsList.get"></a>

```typescript
public get(index: number): DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference <a name="DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityIdpGroupMappings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.property.idpGroupName">idpGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.property.inactiveState">inactiveState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappings">DataOciIdentityIdpGroupMappingsIdpGroupMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.property.identityProviderId"></a>

```typescript
public readonly identityProviderId: string;
```

- *Type:* string

---

##### `idpGroupName`<sup>Required</sup> <a name="idpGroupName" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.property.idpGroupName"></a>

```typescript
public readonly idpGroupName: string;
```

- *Type:* string

---

##### `inactiveState`<sup>Required</sup> <a name="inactiveState" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.property.inactiveState"></a>

```typescript
public readonly inactiveState: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityIdpGroupMappingsIdpGroupMappings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdpGroupMappings.DataOciIdentityIdpGroupMappingsIdpGroupMappings">DataOciIdentityIdpGroupMappingsIdpGroupMappings</a>

---



