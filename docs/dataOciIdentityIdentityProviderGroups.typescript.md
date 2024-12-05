# `dataOciIdentityIdentityProviderGroups` Submodule <a name="`dataOciIdentityIdentityProviderGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityIdentityProviderGroups <a name="DataOciIdentityIdentityProviderGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_identity_provider_groups oci_identity_identity_provider_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.Initializer"></a>

```typescript
import { dataOciIdentityIdentityProviderGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups(scope: Construct, id: string, config: DataOciIdentityIdentityProviderGroupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsConfig">DataOciIdentityIdentityProviderGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsConfig">DataOciIdentityIdentityProviderGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciIdentityIdentityProviderGroupsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilter">DataOciIdentityIdentityProviderGroupsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.resetName"></a>

```typescript
public resetName(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityIdentityProviderGroups resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.isConstruct"></a>

```typescript
import { dataOciIdentityIdentityProviderGroups } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.isTerraformElement"></a>

```typescript
import { dataOciIdentityIdentityProviderGroups } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityIdentityProviderGroups } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.generateConfigForImport"></a>

```typescript
import { dataOciIdentityIdentityProviderGroups } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityIdentityProviderGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityIdentityProviderGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityIdentityProviderGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_identity_provider_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityIdentityProviderGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterList">DataOciIdentityIdentityProviderGroupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.identityProviderGroups">identityProviderGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList">DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilter">DataOciIdentityIdentityProviderGroupsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.identityProviderId">identityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.filter"></a>

```typescript
public readonly filter: DataOciIdentityIdentityProviderGroupsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterList">DataOciIdentityIdentityProviderGroupsFilterList</a>

---

##### `identityProviderGroups`<sup>Required</sup> <a name="identityProviderGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.identityProviderGroups"></a>

```typescript
public readonly identityProviderGroups: DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList">DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciIdentityIdentityProviderGroupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilter">DataOciIdentityIdentityProviderGroupsFilter</a>[]

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.identityProviderIdInput"></a>

```typescript
public readonly identityProviderIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.identityProviderId"></a>

```typescript
public readonly identityProviderId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityIdentityProviderGroupsConfig <a name="DataOciIdentityIdentityProviderGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsConfig.Initializer"></a>

```typescript
import { dataOciIdentityIdentityProviderGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityIdentityProviderGroupsConfig: dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsConfig.property.identityProviderId">identityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_identity_provider_groups#identity_provider_id DataOciIdentityIdentityProviderGroups#identity_provider_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilter">DataOciIdentityIdentityProviderGroupsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_identity_provider_groups#id DataOciIdentityIdentityProviderGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_identity_provider_groups#name DataOciIdentityIdentityProviderGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_identity_provider_groups#state DataOciIdentityIdentityProviderGroups#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsConfig.property.identityProviderId"></a>

```typescript
public readonly identityProviderId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_identity_provider_groups#identity_provider_id DataOciIdentityIdentityProviderGroups#identity_provider_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciIdentityIdentityProviderGroupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilter">DataOciIdentityIdentityProviderGroupsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_identity_provider_groups#filter DataOciIdentityIdentityProviderGroups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_identity_provider_groups#id DataOciIdentityIdentityProviderGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_identity_provider_groups#name DataOciIdentityIdentityProviderGroups#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_identity_provider_groups#state DataOciIdentityIdentityProviderGroups#state}.

---

### DataOciIdentityIdentityProviderGroupsFilter <a name="DataOciIdentityIdentityProviderGroupsFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilter.Initializer"></a>

```typescript
import { dataOciIdentityIdentityProviderGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityIdentityProviderGroupsFilter: dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_identity_provider_groups#name DataOciIdentityIdentityProviderGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_identity_provider_groups#values DataOciIdentityIdentityProviderGroups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_identity_provider_groups#regex DataOciIdentityIdentityProviderGroups#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_identity_provider_groups#name DataOciIdentityIdentityProviderGroups#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_identity_provider_groups#values DataOciIdentityIdentityProviderGroups#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_identity_provider_groups#regex DataOciIdentityIdentityProviderGroups#regex}.

---

### DataOciIdentityIdentityProviderGroupsIdentityProviderGroups <a name="DataOciIdentityIdentityProviderGroupsIdentityProviderGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroups.Initializer"></a>

```typescript
import { dataOciIdentityIdentityProviderGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityIdentityProviderGroupsIdentityProviderGroups: dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroups = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityIdentityProviderGroupsFilterList <a name="DataOciIdentityIdentityProviderGroupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterList.Initializer"></a>

```typescript
import { dataOciIdentityIdentityProviderGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterList.get"></a>

```typescript
public get(index: number): DataOciIdentityIdentityProviderGroupsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilter">DataOciIdentityIdentityProviderGroupsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciIdentityIdentityProviderGroupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilter">DataOciIdentityIdentityProviderGroupsFilter</a>[]

---


### DataOciIdentityIdentityProviderGroupsFilterOutputReference <a name="DataOciIdentityIdentityProviderGroupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityIdentityProviderGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilter">DataOciIdentityIdentityProviderGroupsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciIdentityIdentityProviderGroupsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsFilter">DataOciIdentityIdentityProviderGroupsFilter</a>

---


### DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList <a name="DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList.Initializer"></a>

```typescript
import { dataOciIdentityIdentityProviderGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList.get"></a>

```typescript
public get(index: number): DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference <a name="DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityIdentityProviderGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.property.externalIdentifier">externalIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.property.timeModified">timeModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroups">DataOciIdentityIdentityProviderGroupsIdentityProviderGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `externalIdentifier`<sup>Required</sup> <a name="externalIdentifier" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.property.externalIdentifier"></a>

```typescript
public readonly externalIdentifier: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.property.identityProviderId"></a>

```typescript
public readonly identityProviderId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeModified`<sup>Required</sup> <a name="timeModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.property.timeModified"></a>

```typescript
public readonly timeModified: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityIdentityProviderGroupsIdentityProviderGroups;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIdentityProviderGroups.DataOciIdentityIdentityProviderGroupsIdentityProviderGroups">DataOciIdentityIdentityProviderGroupsIdentityProviderGroups</a>

---



