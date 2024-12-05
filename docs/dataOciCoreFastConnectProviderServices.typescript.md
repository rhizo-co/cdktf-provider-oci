# `dataOciCoreFastConnectProviderServices` Submodule <a name="`dataOciCoreFastConnectProviderServices` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreFastConnectProviderServices <a name="DataOciCoreFastConnectProviderServices" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_services oci_core_fast_connect_provider_services}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.Initializer"></a>

```typescript
import { dataOciCoreFastConnectProviderServices } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices(scope: Construct, id: string, config: DataOciCoreFastConnectProviderServicesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesConfig">DataOciCoreFastConnectProviderServicesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesConfig">DataOciCoreFastConnectProviderServicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreFastConnectProviderServicesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilter">DataOciCoreFastConnectProviderServicesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreFastConnectProviderServices resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.isConstruct"></a>

```typescript
import { dataOciCoreFastConnectProviderServices } from 'rhizo-co-terraform-provider-oci'

dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.isTerraformElement"></a>

```typescript
import { dataOciCoreFastConnectProviderServices } from 'rhizo-co-terraform-provider-oci'

dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.isTerraformDataSource"></a>

```typescript
import { dataOciCoreFastConnectProviderServices } from 'rhizo-co-terraform-provider-oci'

dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.generateConfigForImport"></a>

```typescript
import { dataOciCoreFastConnectProviderServices } from 'rhizo-co-terraform-provider-oci'

dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreFastConnectProviderServices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreFastConnectProviderServices to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreFastConnectProviderServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_services#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreFastConnectProviderServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.fastConnectProviderServices">fastConnectProviderServices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList">DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterList">DataOciCoreFastConnectProviderServicesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilter">DataOciCoreFastConnectProviderServicesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `fastConnectProviderServices`<sup>Required</sup> <a name="fastConnectProviderServices" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.fastConnectProviderServices"></a>

```typescript
public readonly fastConnectProviderServices: DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList">DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.filter"></a>

```typescript
public readonly filter: DataOciCoreFastConnectProviderServicesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterList">DataOciCoreFastConnectProviderServicesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreFastConnectProviderServicesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilter">DataOciCoreFastConnectProviderServicesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServices.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreFastConnectProviderServicesConfig <a name="DataOciCoreFastConnectProviderServicesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesConfig.Initializer"></a>

```typescript
import { dataOciCoreFastConnectProviderServices } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreFastConnectProviderServicesConfig: dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_services#compartment_id DataOciCoreFastConnectProviderServices#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilter">DataOciCoreFastConnectProviderServicesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_services#id DataOciCoreFastConnectProviderServices#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_services#compartment_id DataOciCoreFastConnectProviderServices#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreFastConnectProviderServicesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilter">DataOciCoreFastConnectProviderServicesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_services#filter DataOciCoreFastConnectProviderServices#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_services#id DataOciCoreFastConnectProviderServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreFastConnectProviderServicesFastConnectProviderServices <a name="DataOciCoreFastConnectProviderServicesFastConnectProviderServices" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServices.Initializer"></a>

```typescript
import { dataOciCoreFastConnectProviderServices } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreFastConnectProviderServicesFastConnectProviderServices: dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServices = { ... }
```


### DataOciCoreFastConnectProviderServicesFilter <a name="DataOciCoreFastConnectProviderServicesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilter.Initializer"></a>

```typescript
import { dataOciCoreFastConnectProviderServices } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreFastConnectProviderServicesFilter: dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_services#name DataOciCoreFastConnectProviderServices#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_services#values DataOciCoreFastConnectProviderServices#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_services#regex DataOciCoreFastConnectProviderServices#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_services#name DataOciCoreFastConnectProviderServices#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_services#values DataOciCoreFastConnectProviderServices#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_services#regex DataOciCoreFastConnectProviderServices#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList <a name="DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList.Initializer"></a>

```typescript
import { dataOciCoreFastConnectProviderServices } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList.get"></a>

```typescript
public get(index: number): DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference <a name="DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.Initializer"></a>

```typescript
import { dataOciCoreFastConnectProviderServices } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.property.bandwithShapeManagement">bandwithShapeManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.property.customerAsnManagement">customerAsnManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.property.privatePeeringBgpManagement">privatePeeringBgpManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.property.providerServiceKeyManagement">providerServiceKeyManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.property.providerServiceName">providerServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.property.publicPeeringBgpManagement">publicPeeringBgpManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.property.requiredTotalCrossConnects">requiredTotalCrossConnects</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.property.supportedVirtualCircuitTypes">supportedVirtualCircuitTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServices">DataOciCoreFastConnectProviderServicesFastConnectProviderServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bandwithShapeManagement`<sup>Required</sup> <a name="bandwithShapeManagement" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.property.bandwithShapeManagement"></a>

```typescript
public readonly bandwithShapeManagement: string;
```

- *Type:* string

---

##### `customerAsnManagement`<sup>Required</sup> <a name="customerAsnManagement" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.property.customerAsnManagement"></a>

```typescript
public readonly customerAsnManagement: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `privatePeeringBgpManagement`<sup>Required</sup> <a name="privatePeeringBgpManagement" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.property.privatePeeringBgpManagement"></a>

```typescript
public readonly privatePeeringBgpManagement: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `providerServiceKeyManagement`<sup>Required</sup> <a name="providerServiceKeyManagement" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.property.providerServiceKeyManagement"></a>

```typescript
public readonly providerServiceKeyManagement: string;
```

- *Type:* string

---

##### `providerServiceName`<sup>Required</sup> <a name="providerServiceName" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.property.providerServiceName"></a>

```typescript
public readonly providerServiceName: string;
```

- *Type:* string

---

##### `publicPeeringBgpManagement`<sup>Required</sup> <a name="publicPeeringBgpManagement" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.property.publicPeeringBgpManagement"></a>

```typescript
public readonly publicPeeringBgpManagement: string;
```

- *Type:* string

---

##### `requiredTotalCrossConnects`<sup>Required</sup> <a name="requiredTotalCrossConnects" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.property.requiredTotalCrossConnects"></a>

```typescript
public readonly requiredTotalCrossConnects: number;
```

- *Type:* number

---

##### `supportedVirtualCircuitTypes`<sup>Required</sup> <a name="supportedVirtualCircuitTypes" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.property.supportedVirtualCircuitTypes"></a>

```typescript
public readonly supportedVirtualCircuitTypes: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreFastConnectProviderServicesFastConnectProviderServices;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFastConnectProviderServices">DataOciCoreFastConnectProviderServicesFastConnectProviderServices</a>

---


### DataOciCoreFastConnectProviderServicesFilterList <a name="DataOciCoreFastConnectProviderServicesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterList.Initializer"></a>

```typescript
import { dataOciCoreFastConnectProviderServices } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreFastConnectProviderServicesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilter">DataOciCoreFastConnectProviderServicesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreFastConnectProviderServicesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilter">DataOciCoreFastConnectProviderServicesFilter</a>[]

---


### DataOciCoreFastConnectProviderServicesFilterOutputReference <a name="DataOciCoreFastConnectProviderServicesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreFastConnectProviderServices } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilter">DataOciCoreFastConnectProviderServicesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreFastConnectProviderServicesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServices.DataOciCoreFastConnectProviderServicesFilter">DataOciCoreFastConnectProviderServicesFilter</a>

---



