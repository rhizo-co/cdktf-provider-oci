# `dataOciBdsBdsInstancePatchHistories` Submodule <a name="`dataOciBdsBdsInstancePatchHistories` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBdsBdsInstancePatchHistories <a name="DataOciBdsBdsInstancePatchHistories" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories oci_bds_bds_instance_patch_histories}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer"></a>

```typescript
import { dataOciBdsBdsInstancePatchHistories } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories(scope: Construct, id: string, config: DataOciBdsBdsInstancePatchHistoriesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig">DataOciBdsBdsInstancePatchHistoriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig">DataOciBdsBdsInstancePatchHistoriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.resetPatchType">resetPatchType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.resetPatchVersion">resetPatchVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciBdsBdsInstancePatchHistoriesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter">DataOciBdsBdsInstancePatchHistoriesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPatchType` <a name="resetPatchType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.resetPatchType"></a>

```typescript
public resetPatchType(): void
```

##### `resetPatchVersion` <a name="resetPatchVersion" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.resetPatchVersion"></a>

```typescript
public resetPatchVersion(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciBdsBdsInstancePatchHistories resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.isConstruct"></a>

```typescript
import { dataOciBdsBdsInstancePatchHistories } from 'rhizo-co-terraform-provider-oci'

dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.isTerraformElement"></a>

```typescript
import { dataOciBdsBdsInstancePatchHistories } from 'rhizo-co-terraform-provider-oci'

dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.isTerraformDataSource"></a>

```typescript
import { dataOciBdsBdsInstancePatchHistories } from 'rhizo-co-terraform-provider-oci'

dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.generateConfigForImport"></a>

```typescript
import { dataOciBdsBdsInstancePatchHistories } from 'rhizo-co-terraform-provider-oci'

dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciBdsBdsInstancePatchHistories resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciBdsBdsInstancePatchHistories to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciBdsBdsInstancePatchHistories that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBdsBdsInstancePatchHistories to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList">DataOciBdsBdsInstancePatchHistoriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.patchHistories">patchHistories</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList">DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.bdsInstanceIdInput">bdsInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter">DataOciBdsBdsInstancePatchHistoriesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.patchTypeInput">patchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.patchVersionInput">patchVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.bdsInstanceId">bdsInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.patchType">patchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.patchVersion">patchVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.filter"></a>

```typescript
public readonly filter: DataOciBdsBdsInstancePatchHistoriesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList">DataOciBdsBdsInstancePatchHistoriesFilterList</a>

---

##### `patchHistories`<sup>Required</sup> <a name="patchHistories" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.patchHistories"></a>

```typescript
public readonly patchHistories: DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList">DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList</a>

---

##### `bdsInstanceIdInput`<sup>Optional</sup> <a name="bdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.bdsInstanceIdInput"></a>

```typescript
public readonly bdsInstanceIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciBdsBdsInstancePatchHistoriesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter">DataOciBdsBdsInstancePatchHistoriesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `patchTypeInput`<sup>Optional</sup> <a name="patchTypeInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.patchTypeInput"></a>

```typescript
public readonly patchTypeInput: string;
```

- *Type:* string

---

##### `patchVersionInput`<sup>Optional</sup> <a name="patchVersionInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.patchVersionInput"></a>

```typescript
public readonly patchVersionInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.bdsInstanceId"></a>

```typescript
public readonly bdsInstanceId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `patchType`<sup>Required</sup> <a name="patchType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.patchType"></a>

```typescript
public readonly patchType: string;
```

- *Type:* string

---

##### `patchVersion`<sup>Required</sup> <a name="patchVersion" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.patchVersion"></a>

```typescript
public readonly patchVersion: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistories.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBdsBdsInstancePatchHistoriesConfig <a name="DataOciBdsBdsInstancePatchHistoriesConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.Initializer"></a>

```typescript
import { dataOciBdsBdsInstancePatchHistories } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsBdsInstancePatchHistoriesConfig: dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.bdsInstanceId">bdsInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#bds_instance_id DataOciBdsBdsInstancePatchHistories#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter">DataOciBdsBdsInstancePatchHistoriesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#id DataOciBdsBdsInstancePatchHistories#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.patchType">patchType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#patch_type DataOciBdsBdsInstancePatchHistories#patch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.patchVersion">patchVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#patch_version DataOciBdsBdsInstancePatchHistories#patch_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#state DataOciBdsBdsInstancePatchHistories#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.bdsInstanceId"></a>

```typescript
public readonly bdsInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#bds_instance_id DataOciBdsBdsInstancePatchHistories#bds_instance_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciBdsBdsInstancePatchHistoriesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter">DataOciBdsBdsInstancePatchHistoriesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#filter DataOciBdsBdsInstancePatchHistories#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#id DataOciBdsBdsInstancePatchHistories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `patchType`<sup>Optional</sup> <a name="patchType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.patchType"></a>

```typescript
public readonly patchType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#patch_type DataOciBdsBdsInstancePatchHistories#patch_type}.

---

##### `patchVersion`<sup>Optional</sup> <a name="patchVersion" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.patchVersion"></a>

```typescript
public readonly patchVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#patch_version DataOciBdsBdsInstancePatchHistories#patch_version}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#state DataOciBdsBdsInstancePatchHistories#state}.

---

### DataOciBdsBdsInstancePatchHistoriesFilter <a name="DataOciBdsBdsInstancePatchHistoriesFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter.Initializer"></a>

```typescript
import { dataOciBdsBdsInstancePatchHistories } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsBdsInstancePatchHistoriesFilter: dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#name DataOciBdsBdsInstancePatchHistories#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#values DataOciBdsBdsInstancePatchHistories#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#regex DataOciBdsBdsInstancePatchHistories#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#name DataOciBdsBdsInstancePatchHistories#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#values DataOciBdsBdsInstancePatchHistories#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_patch_histories#regex DataOciBdsBdsInstancePatchHistories#regex}.

---

### DataOciBdsBdsInstancePatchHistoriesPatchHistories <a name="DataOciBdsBdsInstancePatchHistoriesPatchHistories" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistories"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistories.Initializer"></a>

```typescript
import { dataOciBdsBdsInstancePatchHistories } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsBdsInstancePatchHistoriesPatchHistories: dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistories = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciBdsBdsInstancePatchHistoriesFilterList <a name="DataOciBdsBdsInstancePatchHistoriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.Initializer"></a>

```typescript
import { dataOciBdsBdsInstancePatchHistories } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.get"></a>

```typescript
public get(index: number): DataOciBdsBdsInstancePatchHistoriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter">DataOciBdsBdsInstancePatchHistoriesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciBdsBdsInstancePatchHistoriesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter">DataOciBdsBdsInstancePatchHistoriesFilter</a>[]

---


### DataOciBdsBdsInstancePatchHistoriesFilterOutputReference <a name="DataOciBdsBdsInstancePatchHistoriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciBdsBdsInstancePatchHistories } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter">DataOciBdsBdsInstancePatchHistoriesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciBdsBdsInstancePatchHistoriesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesFilter">DataOciBdsBdsInstancePatchHistoriesFilter</a>

---


### DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList <a name="DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.Initializer"></a>

```typescript
import { dataOciBdsBdsInstancePatchHistories } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.get"></a>

```typescript
public get(index: number): DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference <a name="DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.Initializer"></a>

```typescript
import { dataOciBdsBdsInstancePatchHistories } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.property.patchType">patchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistories">DataOciBdsBdsInstancePatchHistoriesPatchHistories</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `patchType`<sup>Required</sup> <a name="patchType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.property.patchType"></a>

```typescript
public readonly patchType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistoriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBdsBdsInstancePatchHistoriesPatchHistories;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstancePatchHistories.DataOciBdsBdsInstancePatchHistoriesPatchHistories">DataOciBdsBdsInstancePatchHistoriesPatchHistories</a>

---



