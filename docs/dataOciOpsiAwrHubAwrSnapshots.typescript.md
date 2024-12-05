# `dataOciOpsiAwrHubAwrSnapshots` Submodule <a name="`dataOciOpsiAwrHubAwrSnapshots` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiAwrHubAwrSnapshots <a name="DataOciOpsiAwrHubAwrSnapshots" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots oci_opsi_awr_hub_awr_snapshots}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubAwrSnapshots } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots(scope: Construct, id: string, config: DataOciOpsiAwrHubAwrSnapshotsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig">DataOciOpsiAwrHubAwrSnapshotsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig">DataOciOpsiAwrHubAwrSnapshotsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetTimeGreaterThanOrEqualTo">resetTimeGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetTimeLessThanOrEqualTo">resetTimeLessThanOrEqualTo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOpsiAwrHubAwrSnapshotsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter">DataOciOpsiAwrHubAwrSnapshotsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeGreaterThanOrEqualTo` <a name="resetTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetTimeGreaterThanOrEqualTo"></a>

```typescript
public resetTimeGreaterThanOrEqualTo(): void
```

##### `resetTimeLessThanOrEqualTo` <a name="resetTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetTimeLessThanOrEqualTo"></a>

```typescript
public resetTimeLessThanOrEqualTo(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiAwrHubAwrSnapshots resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isConstruct"></a>

```typescript
import { dataOciOpsiAwrHubAwrSnapshots } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isTerraformElement"></a>

```typescript
import { dataOciOpsiAwrHubAwrSnapshots } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isTerraformDataSource"></a>

```typescript
import { dataOciOpsiAwrHubAwrSnapshots } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.generateConfigForImport"></a>

```typescript
import { dataOciOpsiAwrHubAwrSnapshots } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOpsiAwrHubAwrSnapshots resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOpsiAwrHubAwrSnapshots to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOpsiAwrHubAwrSnapshots that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiAwrHubAwrSnapshots to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrSnapshotCollection">awrSnapshotCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList">DataOciOpsiAwrHubAwrSnapshotsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrHubIdInput">awrHubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrSourceDatabaseIdentifierInput">awrSourceDatabaseIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter">DataOciOpsiAwrHubAwrSnapshotsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeGreaterThanOrEqualToInput">timeGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeLessThanOrEqualToInput">timeLessThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrHubId">awrHubId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrSourceDatabaseIdentifier">awrSourceDatabaseIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeGreaterThanOrEqualTo">timeGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeLessThanOrEqualTo">timeLessThanOrEqualTo</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `awrSnapshotCollection`<sup>Required</sup> <a name="awrSnapshotCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrSnapshotCollection"></a>

```typescript
public readonly awrSnapshotCollection: DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.filter"></a>

```typescript
public readonly filter: DataOciOpsiAwrHubAwrSnapshotsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList">DataOciOpsiAwrHubAwrSnapshotsFilterList</a>

---

##### `awrHubIdInput`<sup>Optional</sup> <a name="awrHubIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrHubIdInput"></a>

```typescript
public readonly awrHubIdInput: string;
```

- *Type:* string

---

##### `awrSourceDatabaseIdentifierInput`<sup>Optional</sup> <a name="awrSourceDatabaseIdentifierInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrSourceDatabaseIdentifierInput"></a>

```typescript
public readonly awrSourceDatabaseIdentifierInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOpsiAwrHubAwrSnapshotsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter">DataOciOpsiAwrHubAwrSnapshotsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeGreaterThanOrEqualToInput"></a>

```typescript
public readonly timeGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `timeLessThanOrEqualToInput`<sup>Optional</sup> <a name="timeLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeLessThanOrEqualToInput"></a>

```typescript
public readonly timeLessThanOrEqualToInput: string;
```

- *Type:* string

---

##### `awrHubId`<sup>Required</sup> <a name="awrHubId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrHubId"></a>

```typescript
public readonly awrHubId: string;
```

- *Type:* string

---

##### `awrSourceDatabaseIdentifier`<sup>Required</sup> <a name="awrSourceDatabaseIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrSourceDatabaseIdentifier"></a>

```typescript
public readonly awrSourceDatabaseIdentifier: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `timeGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeGreaterThanOrEqualTo"></a>

```typescript
public readonly timeGreaterThanOrEqualTo: string;
```

- *Type:* string

---

##### `timeLessThanOrEqualTo`<sup>Required</sup> <a name="timeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeLessThanOrEqualTo"></a>

```typescript
public readonly timeLessThanOrEqualTo: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubAwrSnapshots } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection: dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection = { ... }
```


### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubAwrSnapshots } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems: dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems = { ... }
```


### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubAwrSnapshots } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems: dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems = { ... }
```


### DataOciOpsiAwrHubAwrSnapshotsConfig <a name="DataOciOpsiAwrHubAwrSnapshotsConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubAwrSnapshots } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiAwrHubAwrSnapshotsConfig: dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.awrHubId">awrHubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#awr_hub_id DataOciOpsiAwrHubAwrSnapshots#awr_hub_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.awrSourceDatabaseIdentifier">awrSourceDatabaseIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#awr_source_database_identifier DataOciOpsiAwrHubAwrSnapshots#awr_source_database_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter">DataOciOpsiAwrHubAwrSnapshotsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#id DataOciOpsiAwrHubAwrSnapshots#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.timeGreaterThanOrEqualTo">timeGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#time_greater_than_or_equal_to DataOciOpsiAwrHubAwrSnapshots#time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.timeLessThanOrEqualTo">timeLessThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#time_less_than_or_equal_to DataOciOpsiAwrHubAwrSnapshots#time_less_than_or_equal_to}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `awrHubId`<sup>Required</sup> <a name="awrHubId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.awrHubId"></a>

```typescript
public readonly awrHubId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#awr_hub_id DataOciOpsiAwrHubAwrSnapshots#awr_hub_id}.

---

##### `awrSourceDatabaseIdentifier`<sup>Required</sup> <a name="awrSourceDatabaseIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.awrSourceDatabaseIdentifier"></a>

```typescript
public readonly awrSourceDatabaseIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#awr_source_database_identifier DataOciOpsiAwrHubAwrSnapshots#awr_source_database_identifier}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOpsiAwrHubAwrSnapshotsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter">DataOciOpsiAwrHubAwrSnapshotsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#filter DataOciOpsiAwrHubAwrSnapshots#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#id DataOciOpsiAwrHubAwrSnapshots#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.timeGreaterThanOrEqualTo"></a>

```typescript
public readonly timeGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#time_greater_than_or_equal_to DataOciOpsiAwrHubAwrSnapshots#time_greater_than_or_equal_to}.

---

##### `timeLessThanOrEqualTo`<sup>Optional</sup> <a name="timeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.timeLessThanOrEqualTo"></a>

```typescript
public readonly timeLessThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#time_less_than_or_equal_to DataOciOpsiAwrHubAwrSnapshots#time_less_than_or_equal_to}.

---

### DataOciOpsiAwrHubAwrSnapshotsFilter <a name="DataOciOpsiAwrHubAwrSnapshotsFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubAwrSnapshots } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiAwrHubAwrSnapshotsFilter: dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#name DataOciOpsiAwrHubAwrSnapshots#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#values DataOciOpsiAwrHubAwrSnapshots#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#regex DataOciOpsiAwrHubAwrSnapshots#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#name DataOciOpsiAwrHubAwrSnapshots#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#values DataOciOpsiAwrHubAwrSnapshots#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#regex DataOciOpsiAwrHubAwrSnapshots#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubAwrSnapshots } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.get"></a>

```typescript
public get(index: number): DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubAwrSnapshots } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.awrSourceDatabaseId">awrSourceDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.errorCount">errorCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.instanceNumber">instanceNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.snapshotIdentifier">snapshotIdentifier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.timeDbStartup">timeDbStartup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.timeSnapshotBegin">timeSnapshotBegin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.timeSnapshotEnd">timeSnapshotEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awrSourceDatabaseId`<sup>Required</sup> <a name="awrSourceDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.awrSourceDatabaseId"></a>

```typescript
public readonly awrSourceDatabaseId: string;
```

- *Type:* string

---

##### `errorCount`<sup>Required</sup> <a name="errorCount" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.errorCount"></a>

```typescript
public readonly errorCount: string;
```

- *Type:* string

---

##### `instanceNumber`<sup>Required</sup> <a name="instanceNumber" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.instanceNumber"></a>

```typescript
public readonly instanceNumber: number;
```

- *Type:* number

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="snapshotIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.snapshotIdentifier"></a>

```typescript
public readonly snapshotIdentifier: number;
```

- *Type:* number

---

##### `timeDbStartup`<sup>Required</sup> <a name="timeDbStartup" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.timeDbStartup"></a>

```typescript
public readonly timeDbStartup: string;
```

- *Type:* string

---

##### `timeSnapshotBegin`<sup>Required</sup> <a name="timeSnapshotBegin" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.timeSnapshotBegin"></a>

```typescript
public readonly timeSnapshotBegin: string;
```

- *Type:* string

---

##### `timeSnapshotEnd`<sup>Required</sup> <a name="timeSnapshotEnd" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.timeSnapshotEnd"></a>

```typescript
public readonly timeSnapshotEnd: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems</a>

---


### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubAwrSnapshots } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubAwrSnapshots } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems</a>

---


### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubAwrSnapshots } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.get"></a>

```typescript
public get(index: number): DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubAwrSnapshots } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection</a>

---


### DataOciOpsiAwrHubAwrSnapshotsFilterList <a name="DataOciOpsiAwrHubAwrSnapshotsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubAwrSnapshots } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.get"></a>

```typescript
public get(index: number): DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter">DataOciOpsiAwrHubAwrSnapshotsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOpsiAwrHubAwrSnapshotsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter">DataOciOpsiAwrHubAwrSnapshotsFilter</a>[]

---


### DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference <a name="DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubAwrSnapshots } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter">DataOciOpsiAwrHubAwrSnapshotsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOpsiAwrHubAwrSnapshotsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter">DataOciOpsiAwrHubAwrSnapshotsFilter</a>

---



