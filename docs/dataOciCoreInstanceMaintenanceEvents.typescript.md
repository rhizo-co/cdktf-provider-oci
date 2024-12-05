# `dataOciCoreInstanceMaintenanceEvents` Submodule <a name="`dataOciCoreInstanceMaintenanceEvents` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreInstanceMaintenanceEvents <a name="DataOciCoreInstanceMaintenanceEvents" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events oci_core_instance_maintenance_events}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer"></a>

```typescript
import { dataOciCoreInstanceMaintenanceEvents } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents(scope: Construct, id: string, config: DataOciCoreInstanceMaintenanceEventsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig">DataOciCoreInstanceMaintenanceEventsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig">DataOciCoreInstanceMaintenanceEventsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetCorrelationToken">resetCorrelationToken</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetInstanceAction">resetInstanceAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetInstanceId">resetInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetTimeWindowStartGreaterThanOrEqualTo">resetTimeWindowStartGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetTimeWindowStartLessThanOrEqualTo">resetTimeWindowStartLessThanOrEqualTo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreInstanceMaintenanceEventsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter">DataOciCoreInstanceMaintenanceEventsFilter</a>[]

---

##### `resetCorrelationToken` <a name="resetCorrelationToken" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetCorrelationToken"></a>

```typescript
public resetCorrelationToken(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceAction` <a name="resetInstanceAction" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetInstanceAction"></a>

```typescript
public resetInstanceAction(): void
```

##### `resetInstanceId` <a name="resetInstanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetInstanceId"></a>

```typescript
public resetInstanceId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTimeWindowStartGreaterThanOrEqualTo` <a name="resetTimeWindowStartGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetTimeWindowStartGreaterThanOrEqualTo"></a>

```typescript
public resetTimeWindowStartGreaterThanOrEqualTo(): void
```

##### `resetTimeWindowStartLessThanOrEqualTo` <a name="resetTimeWindowStartLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetTimeWindowStartLessThanOrEqualTo"></a>

```typescript
public resetTimeWindowStartLessThanOrEqualTo(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreInstanceMaintenanceEvents resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.isConstruct"></a>

```typescript
import { dataOciCoreInstanceMaintenanceEvents } from 'rhizo-co-terraform-provider-oci'

dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.isTerraformElement"></a>

```typescript
import { dataOciCoreInstanceMaintenanceEvents } from 'rhizo-co-terraform-provider-oci'

dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.isTerraformDataSource"></a>

```typescript
import { dataOciCoreInstanceMaintenanceEvents } from 'rhizo-co-terraform-provider-oci'

dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.generateConfigForImport"></a>

```typescript
import { dataOciCoreInstanceMaintenanceEvents } from 'rhizo-co-terraform-provider-oci'

dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreInstanceMaintenanceEvents resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreInstanceMaintenanceEvents to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreInstanceMaintenanceEvents that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreInstanceMaintenanceEvents to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList">DataOciCoreInstanceMaintenanceEventsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.instanceMaintenanceEvents">instanceMaintenanceEvents</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList">DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.correlationTokenInput">correlationTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter">DataOciCoreInstanceMaintenanceEventsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.instanceActionInput">instanceActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.timeWindowStartGreaterThanOrEqualToInput">timeWindowStartGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.timeWindowStartLessThanOrEqualToInput">timeWindowStartLessThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.correlationToken">correlationToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.instanceAction">instanceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.timeWindowStartGreaterThanOrEqualTo">timeWindowStartGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.timeWindowStartLessThanOrEqualTo">timeWindowStartLessThanOrEqualTo</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.filter"></a>

```typescript
public readonly filter: DataOciCoreInstanceMaintenanceEventsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList">DataOciCoreInstanceMaintenanceEventsFilterList</a>

---

##### `instanceMaintenanceEvents`<sup>Required</sup> <a name="instanceMaintenanceEvents" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.instanceMaintenanceEvents"></a>

```typescript
public readonly instanceMaintenanceEvents: DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList">DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `correlationTokenInput`<sup>Optional</sup> <a name="correlationTokenInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.correlationTokenInput"></a>

```typescript
public readonly correlationTokenInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreInstanceMaintenanceEventsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter">DataOciCoreInstanceMaintenanceEventsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceActionInput`<sup>Optional</sup> <a name="instanceActionInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.instanceActionInput"></a>

```typescript
public readonly instanceActionInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `timeWindowStartGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeWindowStartGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.timeWindowStartGreaterThanOrEqualToInput"></a>

```typescript
public readonly timeWindowStartGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `timeWindowStartLessThanOrEqualToInput`<sup>Optional</sup> <a name="timeWindowStartLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.timeWindowStartLessThanOrEqualToInput"></a>

```typescript
public readonly timeWindowStartLessThanOrEqualToInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `correlationToken`<sup>Required</sup> <a name="correlationToken" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.correlationToken"></a>

```typescript
public readonly correlationToken: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceAction`<sup>Required</sup> <a name="instanceAction" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.instanceAction"></a>

```typescript
public readonly instanceAction: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeWindowStartGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeWindowStartGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.timeWindowStartGreaterThanOrEqualTo"></a>

```typescript
public readonly timeWindowStartGreaterThanOrEqualTo: string;
```

- *Type:* string

---

##### `timeWindowStartLessThanOrEqualTo`<sup>Required</sup> <a name="timeWindowStartLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.timeWindowStartLessThanOrEqualTo"></a>

```typescript
public readonly timeWindowStartLessThanOrEqualTo: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreInstanceMaintenanceEventsConfig <a name="DataOciCoreInstanceMaintenanceEventsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.Initializer"></a>

```typescript
import { dataOciCoreInstanceMaintenanceEvents } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreInstanceMaintenanceEventsConfig: dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#compartment_id DataOciCoreInstanceMaintenanceEvents#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.correlationToken">correlationToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#correlation_token DataOciCoreInstanceMaintenanceEvents#correlation_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter">DataOciCoreInstanceMaintenanceEventsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#id DataOciCoreInstanceMaintenanceEvents#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.instanceAction">instanceAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#instance_action DataOciCoreInstanceMaintenanceEvents#instance_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#instance_id DataOciCoreInstanceMaintenanceEvents#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#state DataOciCoreInstanceMaintenanceEvents#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.timeWindowStartGreaterThanOrEqualTo">timeWindowStartGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#time_window_start_greater_than_or_equal_to DataOciCoreInstanceMaintenanceEvents#time_window_start_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.timeWindowStartLessThanOrEqualTo">timeWindowStartLessThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#time_window_start_less_than_or_equal_to DataOciCoreInstanceMaintenanceEvents#time_window_start_less_than_or_equal_to}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#compartment_id DataOciCoreInstanceMaintenanceEvents#compartment_id}.

---

##### `correlationToken`<sup>Optional</sup> <a name="correlationToken" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.correlationToken"></a>

```typescript
public readonly correlationToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#correlation_token DataOciCoreInstanceMaintenanceEvents#correlation_token}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreInstanceMaintenanceEventsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter">DataOciCoreInstanceMaintenanceEventsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#filter DataOciCoreInstanceMaintenanceEvents#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#id DataOciCoreInstanceMaintenanceEvents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceAction`<sup>Optional</sup> <a name="instanceAction" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.instanceAction"></a>

```typescript
public readonly instanceAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#instance_action DataOciCoreInstanceMaintenanceEvents#instance_action}.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#instance_id DataOciCoreInstanceMaintenanceEvents#instance_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#state DataOciCoreInstanceMaintenanceEvents#state}.

---

##### `timeWindowStartGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeWindowStartGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.timeWindowStartGreaterThanOrEqualTo"></a>

```typescript
public readonly timeWindowStartGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#time_window_start_greater_than_or_equal_to DataOciCoreInstanceMaintenanceEvents#time_window_start_greater_than_or_equal_to}.

---

##### `timeWindowStartLessThanOrEqualTo`<sup>Optional</sup> <a name="timeWindowStartLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.timeWindowStartLessThanOrEqualTo"></a>

```typescript
public readonly timeWindowStartLessThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#time_window_start_less_than_or_equal_to DataOciCoreInstanceMaintenanceEvents#time_window_start_less_than_or_equal_to}.

---

### DataOciCoreInstanceMaintenanceEventsFilter <a name="DataOciCoreInstanceMaintenanceEventsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter.Initializer"></a>

```typescript
import { dataOciCoreInstanceMaintenanceEvents } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreInstanceMaintenanceEventsFilter: dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#name DataOciCoreInstanceMaintenanceEvents#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#values DataOciCoreInstanceMaintenanceEvents#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#regex DataOciCoreInstanceMaintenanceEvents#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#name DataOciCoreInstanceMaintenanceEvents#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#values DataOciCoreInstanceMaintenanceEvents#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#regex DataOciCoreInstanceMaintenanceEvents#regex}.

---

### DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents <a name="DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents.Initializer"></a>

```typescript
import { dataOciCoreInstanceMaintenanceEvents } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents: dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreInstanceMaintenanceEventsFilterList <a name="DataOciCoreInstanceMaintenanceEventsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.Initializer"></a>

```typescript
import { dataOciCoreInstanceMaintenanceEvents } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreInstanceMaintenanceEventsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter">DataOciCoreInstanceMaintenanceEventsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreInstanceMaintenanceEventsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter">DataOciCoreInstanceMaintenanceEventsFilter</a>[]

---


### DataOciCoreInstanceMaintenanceEventsFilterOutputReference <a name="DataOciCoreInstanceMaintenanceEventsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreInstanceMaintenanceEvents } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter">DataOciCoreInstanceMaintenanceEventsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreInstanceMaintenanceEventsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter">DataOciCoreInstanceMaintenanceEventsFilter</a>

---


### DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList <a name="DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.Initializer"></a>

```typescript
import { dataOciCoreInstanceMaintenanceEvents } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.get"></a>

```typescript
public get(index: number): DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference <a name="DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreInstanceMaintenanceEvents } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.additionalDetails">additionalDetails</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.alternativeResolutionAction">alternativeResolutionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.alternativeResolutionActions">alternativeResolutionActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.canDeleteLocalStorage">canDeleteLocalStorage</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.canReschedule">canReschedule</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.correlationToken">correlationToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.estimatedDuration">estimatedDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.instanceAction">instanceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.instanceMaintenanceEventId">instanceMaintenanceEventId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.maintenanceCategory">maintenanceCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.maintenanceReason">maintenanceReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.startWindowDuration">startWindowDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.timeFinished">timeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.timeHardDueDate">timeHardDueDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.timeWindowStart">timeWindowStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents">DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalDetails`<sup>Required</sup> <a name="additionalDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.additionalDetails"></a>

```typescript
public readonly additionalDetails: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `alternativeResolutionAction`<sup>Required</sup> <a name="alternativeResolutionAction" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.alternativeResolutionAction"></a>

```typescript
public readonly alternativeResolutionAction: string;
```

- *Type:* string

---

##### `alternativeResolutionActions`<sup>Required</sup> <a name="alternativeResolutionActions" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.alternativeResolutionActions"></a>

```typescript
public readonly alternativeResolutionActions: string[];
```

- *Type:* string[]

---

##### `canDeleteLocalStorage`<sup>Required</sup> <a name="canDeleteLocalStorage" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.canDeleteLocalStorage"></a>

```typescript
public readonly canDeleteLocalStorage: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `canReschedule`<sup>Required</sup> <a name="canReschedule" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.canReschedule"></a>

```typescript
public readonly canReschedule: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `correlationToken`<sup>Required</sup> <a name="correlationToken" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.correlationToken"></a>

```typescript
public readonly correlationToken: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `estimatedDuration`<sup>Required</sup> <a name="estimatedDuration" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.estimatedDuration"></a>

```typescript
public readonly estimatedDuration: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceAction`<sup>Required</sup> <a name="instanceAction" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.instanceAction"></a>

```typescript
public readonly instanceAction: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `instanceMaintenanceEventId`<sup>Required</sup> <a name="instanceMaintenanceEventId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.instanceMaintenanceEventId"></a>

```typescript
public readonly instanceMaintenanceEventId: string;
```

- *Type:* string

---

##### `maintenanceCategory`<sup>Required</sup> <a name="maintenanceCategory" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.maintenanceCategory"></a>

```typescript
public readonly maintenanceCategory: string;
```

- *Type:* string

---

##### `maintenanceReason`<sup>Required</sup> <a name="maintenanceReason" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.maintenanceReason"></a>

```typescript
public readonly maintenanceReason: string;
```

- *Type:* string

---

##### `startWindowDuration`<sup>Required</sup> <a name="startWindowDuration" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.startWindowDuration"></a>

```typescript
public readonly startWindowDuration: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.timeFinished"></a>

```typescript
public readonly timeFinished: string;
```

- *Type:* string

---

##### `timeHardDueDate`<sup>Required</sup> <a name="timeHardDueDate" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.timeHardDueDate"></a>

```typescript
public readonly timeHardDueDate: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `timeWindowStart`<sup>Required</sup> <a name="timeWindowStart" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.timeWindowStart"></a>

```typescript
public readonly timeWindowStart: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents">DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents</a>

---



