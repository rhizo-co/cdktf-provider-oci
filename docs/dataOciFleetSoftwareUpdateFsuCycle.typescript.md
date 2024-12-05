# `dataOciFleetSoftwareUpdateFsuCycle` Submodule <a name="`dataOciFleetSoftwareUpdateFsuCycle` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetSoftwareUpdateFsuCycle <a name="DataOciFleetSoftwareUpdateFsuCycle" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycle oci_fleet_software_update_fsu_cycle}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycle } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle(scope: Construct, id: string, config: DataOciFleetSoftwareUpdateFsuCycleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig">DataOciFleetSoftwareUpdateFsuCycleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig">DataOciFleetSoftwareUpdateFsuCycleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetSoftwareUpdateFsuCycle resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.isConstruct"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycle } from 'rhizo-co-terraform-provider-oci'

dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.isTerraformElement"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycle } from 'rhizo-co-terraform-provider-oci'

dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.isTerraformDataSource"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycle } from 'rhizo-co-terraform-provider-oci'

dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.generateConfigForImport"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycle } from 'rhizo-co-terraform-provider-oci'

dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciFleetSoftwareUpdateFsuCycle resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFleetSoftwareUpdateFsuCycle to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFleetSoftwareUpdateFsuCycle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetSoftwareUpdateFsuCycle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.applyActionSchedule">applyActionSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList">DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.batchingStrategy">batchingStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList">DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.collectionType">collectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.diagnosticsCollection">diagnosticsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList">DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.executingFsuActionId">executingFsuActionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.fsuCollectionId">fsuCollectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.goalVersionDetails">goalVersionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList">DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.isIgnoreMissingPatches">isIgnoreMissingPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.isIgnorePatches">isIgnorePatches</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.isKeepPlacement">isKeepPlacement</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.lastCompletedAction">lastCompletedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.maxDrainTimeoutInSeconds">maxDrainTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.nextActionToExecute">nextActionToExecute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList">DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.stageActionSchedule">stageActionSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList">DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.timeFinished">timeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.fsuCycleIdInput">fsuCycleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.fsuCycleId">fsuCycleId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `applyActionSchedule`<sup>Required</sup> <a name="applyActionSchedule" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.applyActionSchedule"></a>

```typescript
public readonly applyActionSchedule: DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList">DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList</a>

---

##### `batchingStrategy`<sup>Required</sup> <a name="batchingStrategy" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.batchingStrategy"></a>

```typescript
public readonly batchingStrategy: DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList">DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList</a>

---

##### `collectionType`<sup>Required</sup> <a name="collectionType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.collectionType"></a>

```typescript
public readonly collectionType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `diagnosticsCollection`<sup>Required</sup> <a name="diagnosticsCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.diagnosticsCollection"></a>

```typescript
public readonly diagnosticsCollection: DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList">DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `executingFsuActionId`<sup>Required</sup> <a name="executingFsuActionId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.executingFsuActionId"></a>

```typescript
public readonly executingFsuActionId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `fsuCollectionId`<sup>Required</sup> <a name="fsuCollectionId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.fsuCollectionId"></a>

```typescript
public readonly fsuCollectionId: string;
```

- *Type:* string

---

##### `goalVersionDetails`<sup>Required</sup> <a name="goalVersionDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.goalVersionDetails"></a>

```typescript
public readonly goalVersionDetails: DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList">DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isIgnoreMissingPatches`<sup>Required</sup> <a name="isIgnoreMissingPatches" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.isIgnoreMissingPatches"></a>

```typescript
public readonly isIgnoreMissingPatches: string[];
```

- *Type:* string[]

---

##### `isIgnorePatches`<sup>Required</sup> <a name="isIgnorePatches" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.isIgnorePatches"></a>

```typescript
public readonly isIgnorePatches: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isKeepPlacement`<sup>Required</sup> <a name="isKeepPlacement" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.isKeepPlacement"></a>

```typescript
public readonly isKeepPlacement: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lastCompletedAction`<sup>Required</sup> <a name="lastCompletedAction" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.lastCompletedAction"></a>

```typescript
public readonly lastCompletedAction: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `maxDrainTimeoutInSeconds`<sup>Required</sup> <a name="maxDrainTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.maxDrainTimeoutInSeconds"></a>

```typescript
public readonly maxDrainTimeoutInSeconds: number;
```

- *Type:* number

---

##### `nextActionToExecute`<sup>Required</sup> <a name="nextActionToExecute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.nextActionToExecute"></a>

```typescript
public readonly nextActionToExecute: DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList">DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList</a>

---

##### `stageActionSchedule`<sup>Required</sup> <a name="stageActionSchedule" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.stageActionSchedule"></a>

```typescript
public readonly stageActionSchedule: DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList">DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.timeFinished"></a>

```typescript
public readonly timeFinished: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `fsuCycleIdInput`<sup>Optional</sup> <a name="fsuCycleIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.fsuCycleIdInput"></a>

```typescript
public readonly fsuCycleIdInput: string;
```

- *Type:* string

---

##### `fsuCycleId`<sup>Required</sup> <a name="fsuCycleId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.fsuCycleId"></a>

```typescript
public readonly fsuCycleId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetSoftwareUpdateFsuCycleApplyActionSchedule <a name="DataOciFleetSoftwareUpdateFsuCycleApplyActionSchedule" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionSchedule.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycle } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetSoftwareUpdateFsuCycleApplyActionSchedule: dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionSchedule = { ... }
```


### DataOciFleetSoftwareUpdateFsuCycleBatchingStrategy <a name="DataOciFleetSoftwareUpdateFsuCycleBatchingStrategy" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategy.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycle } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetSoftwareUpdateFsuCycleBatchingStrategy: dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategy = { ... }
```


### DataOciFleetSoftwareUpdateFsuCycleConfig <a name="DataOciFleetSoftwareUpdateFsuCycleConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycle } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetSoftwareUpdateFsuCycleConfig: dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.fsuCycleId">fsuCycleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycle#fsu_cycle_id DataOciFleetSoftwareUpdateFsuCycle#fsu_cycle_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fsuCycleId`<sup>Required</sup> <a name="fsuCycleId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.fsuCycleId"></a>

```typescript
public readonly fsuCycleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycle#fsu_cycle_id DataOciFleetSoftwareUpdateFsuCycle#fsu_cycle_id}.

---

### DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollection <a name="DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollection.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycle } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollection: dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollection = { ... }
```


### DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetails <a name="DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetails.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycle } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetSoftwareUpdateFsuCycleGoalVersionDetails: dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetails = { ... }
```


### DataOciFleetSoftwareUpdateFsuCycleNextActionToExecute <a name="DataOciFleetSoftwareUpdateFsuCycleNextActionToExecute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecute"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecute.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycle } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetSoftwareUpdateFsuCycleNextActionToExecute: dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecute = { ... }
```


### DataOciFleetSoftwareUpdateFsuCycleStageActionSchedule <a name="DataOciFleetSoftwareUpdateFsuCycleStageActionSchedule" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionSchedule.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycle } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetSoftwareUpdateFsuCycleStageActionSchedule: dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionSchedule = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList <a name="DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycle } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.get"></a>

```typescript
public get(index: number): DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference <a name="DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycle } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.timeToStart">timeToStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionSchedule">DataOciFleetSoftwareUpdateFsuCycleApplyActionSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeToStart`<sup>Required</sup> <a name="timeToStart" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.timeToStart"></a>

```typescript
public readonly timeToStart: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetSoftwareUpdateFsuCycleApplyActionSchedule;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionSchedule">DataOciFleetSoftwareUpdateFsuCycleApplyActionSchedule</a>

---


### DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList <a name="DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycle } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.get"></a>

```typescript
public get(index: number): DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference <a name="DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycle } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.isForceRolling">isForceRolling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.isWaitForBatchResume">isWaitForBatchResume</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.percentage">percentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategy">DataOciFleetSoftwareUpdateFsuCycleBatchingStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isForceRolling`<sup>Required</sup> <a name="isForceRolling" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.isForceRolling"></a>

```typescript
public readonly isForceRolling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isWaitForBatchResume`<sup>Required</sup> <a name="isWaitForBatchResume" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.isWaitForBatchResume"></a>

```typescript
public readonly isWaitForBatchResume: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetSoftwareUpdateFsuCycleBatchingStrategy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategy">DataOciFleetSoftwareUpdateFsuCycleBatchingStrategy</a>

---


### DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList <a name="DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycle } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.get"></a>

```typescript
public get(index: number): DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference <a name="DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycle } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.logCollectionMode">logCollectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollection">DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logCollectionMode`<sup>Required</sup> <a name="logCollectionMode" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.logCollectionMode"></a>

```typescript
public readonly logCollectionMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollection">DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollection</a>

---


### DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList <a name="DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycle } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.get"></a>

```typescript
public get(index: number): DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference <a name="DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycle } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.homePolicy">homePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.newHomePrefix">newHomePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.softwareImageId">softwareImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetails">DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `homePolicy`<sup>Required</sup> <a name="homePolicy" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.homePolicy"></a>

```typescript
public readonly homePolicy: string;
```

- *Type:* string

---

##### `newHomePrefix`<sup>Required</sup> <a name="newHomePrefix" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.newHomePrefix"></a>

```typescript
public readonly newHomePrefix: string;
```

- *Type:* string

---

##### `softwareImageId`<sup>Required</sup> <a name="softwareImageId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.softwareImageId"></a>

```typescript
public readonly softwareImageId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetails">DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetails</a>

---


### DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList <a name="DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycle } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.get"></a>

```typescript
public get(index: number): DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference <a name="DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycle } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.timeToStart">timeToStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecute">DataOciFleetSoftwareUpdateFsuCycleNextActionToExecute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeToStart`<sup>Required</sup> <a name="timeToStart" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.timeToStart"></a>

```typescript
public readonly timeToStart: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetSoftwareUpdateFsuCycleNextActionToExecute;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecute">DataOciFleetSoftwareUpdateFsuCycleNextActionToExecute</a>

---


### DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList <a name="DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycle } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.get"></a>

```typescript
public get(index: number): DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference <a name="DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycle } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.timeToStart">timeToStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionSchedule">DataOciFleetSoftwareUpdateFsuCycleStageActionSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeToStart`<sup>Required</sup> <a name="timeToStart" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.timeToStart"></a>

```typescript
public readonly timeToStart: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetSoftwareUpdateFsuCycleStageActionSchedule;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionSchedule">DataOciFleetSoftwareUpdateFsuCycleStageActionSchedule</a>

---



