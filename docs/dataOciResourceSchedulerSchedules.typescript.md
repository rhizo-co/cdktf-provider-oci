# `dataOciResourceSchedulerSchedules` Submodule <a name="`dataOciResourceSchedulerSchedules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciResourceSchedulerSchedules <a name="DataOciResourceSchedulerSchedules" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules oci_resource_scheduler_schedules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer"></a>

```typescript
import { dataOciResourceSchedulerSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules(scope: Construct, id: string, config?: DataOciResourceSchedulerSchedulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig">DataOciResourceSchedulerSchedulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig">DataOciResourceSchedulerSchedulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetScheduleId">resetScheduleId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciResourceSchedulerSchedulesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetId"></a>

```typescript
public resetId(): void
```

##### `resetScheduleId` <a name="resetScheduleId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetScheduleId"></a>

```typescript
public resetScheduleId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciResourceSchedulerSchedules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isConstruct"></a>

```typescript
import { dataOciResourceSchedulerSchedules } from 'rhizo-co-terraform-provider-oci'

dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isTerraformElement"></a>

```typescript
import { dataOciResourceSchedulerSchedules } from 'rhizo-co-terraform-provider-oci'

dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isTerraformDataSource"></a>

```typescript
import { dataOciResourceSchedulerSchedules } from 'rhizo-co-terraform-provider-oci'

dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.generateConfigForImport"></a>

```typescript
import { dataOciResourceSchedulerSchedules } from 'rhizo-co-terraform-provider-oci'

dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciResourceSchedulerSchedules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciResourceSchedulerSchedules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciResourceSchedulerSchedules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciResourceSchedulerSchedules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList">DataOciResourceSchedulerSchedulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.scheduleCollection">scheduleCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList">DataOciResourceSchedulerSchedulesScheduleCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.scheduleIdInput">scheduleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.scheduleId">scheduleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.filter"></a>

```typescript
public readonly filter: DataOciResourceSchedulerSchedulesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList">DataOciResourceSchedulerSchedulesFilterList</a>

---

##### `scheduleCollection`<sup>Required</sup> <a name="scheduleCollection" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.scheduleCollection"></a>

```typescript
public readonly scheduleCollection: DataOciResourceSchedulerSchedulesScheduleCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList">DataOciResourceSchedulerSchedulesScheduleCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciResourceSchedulerSchedulesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `scheduleIdInput`<sup>Optional</sup> <a name="scheduleIdInput" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.scheduleIdInput"></a>

```typescript
public readonly scheduleIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `scheduleId`<sup>Required</sup> <a name="scheduleId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.scheduleId"></a>

```typescript
public readonly scheduleId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciResourceSchedulerSchedulesConfig <a name="DataOciResourceSchedulerSchedulesConfig" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.Initializer"></a>

```typescript
import { dataOciResourceSchedulerSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciResourceSchedulerSchedulesConfig: dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#compartment_id DataOciResourceSchedulerSchedules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#display_name DataOciResourceSchedulerSchedules#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#id DataOciResourceSchedulerSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.scheduleId">scheduleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#schedule_id DataOciResourceSchedulerSchedules#schedule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#state DataOciResourceSchedulerSchedules#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#compartment_id DataOciResourceSchedulerSchedules#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#display_name DataOciResourceSchedulerSchedules#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciResourceSchedulerSchedulesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#filter DataOciResourceSchedulerSchedules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#id DataOciResourceSchedulerSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scheduleId`<sup>Optional</sup> <a name="scheduleId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.scheduleId"></a>

```typescript
public readonly scheduleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#schedule_id DataOciResourceSchedulerSchedules#schedule_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#state DataOciResourceSchedulerSchedules#state}.

---

### DataOciResourceSchedulerSchedulesFilter <a name="DataOciResourceSchedulerSchedulesFilter" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter.Initializer"></a>

```typescript
import { dataOciResourceSchedulerSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciResourceSchedulerSchedulesFilter: dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#name DataOciResourceSchedulerSchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#values DataOciResourceSchedulerSchedules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#regex DataOciResourceSchedulerSchedules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#name DataOciResourceSchedulerSchedules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#values DataOciResourceSchedulerSchedules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#regex DataOciResourceSchedulerSchedules#regex}.

---

### DataOciResourceSchedulerSchedulesScheduleCollection <a name="DataOciResourceSchedulerSchedulesScheduleCollection" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollection.Initializer"></a>

```typescript
import { dataOciResourceSchedulerSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciResourceSchedulerSchedulesScheduleCollection: dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollection = { ... }
```


### DataOciResourceSchedulerSchedulesScheduleCollectionItems <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItems.Initializer"></a>

```typescript
import { dataOciResourceSchedulerSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciResourceSchedulerSchedulesScheduleCollectionItems: dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItems = { ... }
```


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters.Initializer"></a>

```typescript
import { dataOciResourceSchedulerSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters: dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters = { ... }
```


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue.Initializer"></a>

```typescript
import { dataOciResourceSchedulerSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue: dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue = { ... }
```


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources.Initializer"></a>

```typescript
import { dataOciResourceSchedulerSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciResourceSchedulerSchedulesScheduleCollectionItemsResources: dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciResourceSchedulerSchedulesFilterList <a name="DataOciResourceSchedulerSchedulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.Initializer"></a>

```typescript
import { dataOciResourceSchedulerSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.get"></a>

```typescript
public get(index: number): DataOciResourceSchedulerSchedulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciResourceSchedulerSchedulesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a>[]

---


### DataOciResourceSchedulerSchedulesFilterOutputReference <a name="DataOciResourceSchedulerSchedulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciResourceSchedulerSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciResourceSchedulerSchedulesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a>

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsList <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.Initializer"></a>

```typescript
import { dataOciResourceSchedulerSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciResourceSchedulerSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.recurrenceDetails">recurrenceDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.recurrenceType">recurrenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.resourceFilters">resourceFilters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.resources">resources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeEnds">timeEnds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeLastRun">timeLastRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeNextRun">timeNextRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeStarts">timeStarts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItems">DataOciResourceSchedulerSchedulesScheduleCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `recurrenceDetails`<sup>Required</sup> <a name="recurrenceDetails" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.recurrenceDetails"></a>

```typescript
public readonly recurrenceDetails: string;
```

- *Type:* string

---

##### `recurrenceType`<sup>Required</sup> <a name="recurrenceType" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.recurrenceType"></a>

```typescript
public readonly recurrenceType: string;
```

- *Type:* string

---

##### `resourceFilters`<sup>Required</sup> <a name="resourceFilters" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.resourceFilters"></a>

```typescript
public readonly resourceFilters: DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.resources"></a>

```typescript
public readonly resources: DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeEnds`<sup>Required</sup> <a name="timeEnds" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeEnds"></a>

```typescript
public readonly timeEnds: string;
```

- *Type:* string

---

##### `timeLastRun`<sup>Required</sup> <a name="timeLastRun" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeLastRun"></a>

```typescript
public readonly timeLastRun: string;
```

- *Type:* string

---

##### `timeNextRun`<sup>Required</sup> <a name="timeNextRun" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeNextRun"></a>

```typescript
public readonly timeNextRun: string;
```

- *Type:* string

---

##### `timeStarts`<sup>Required</sup> <a name="timeStarts" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeStarts"></a>

```typescript
public readonly timeStarts: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciResourceSchedulerSchedulesScheduleCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItems">DataOciResourceSchedulerSchedulesScheduleCollectionItems</a>

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.Initializer"></a>

```typescript
import { dataOciResourceSchedulerSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.get"></a>

```typescript
public get(index: number): DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer"></a>

```typescript
import { dataOciResourceSchedulerSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.shouldIncludeChildCompartments">shouldIncludeChildCompartments</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.value">value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `shouldIncludeChildCompartments`<sup>Required</sup> <a name="shouldIncludeChildCompartments" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.shouldIncludeChildCompartments"></a>

```typescript
public readonly shouldIncludeChildCompartments: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.value"></a>

```typescript
public readonly value: DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters</a>

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.Initializer"></a>

```typescript
import { dataOciResourceSchedulerSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.get"></a>

```typescript
public get(index: number): DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer"></a>

```typescript
import { dataOciResourceSchedulerSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue</a>

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.Initializer"></a>

```typescript
import { dataOciResourceSchedulerSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.get"></a>

```typescript
public get(index: number): DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer"></a>

```typescript
import { dataOciResourceSchedulerSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.metadata"></a>

```typescript
public readonly metadata: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources</a>

---


### DataOciResourceSchedulerSchedulesScheduleCollectionList <a name="DataOciResourceSchedulerSchedulesScheduleCollectionList" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.Initializer"></a>

```typescript
import { dataOciResourceSchedulerSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.get"></a>

```typescript
public get(index: number): DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference <a name="DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciResourceSchedulerSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollection">DataOciResourceSchedulerSchedulesScheduleCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciResourceSchedulerSchedulesScheduleCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciResourceSchedulerSchedulesScheduleCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollection">DataOciResourceSchedulerSchedulesScheduleCollection</a>

---



