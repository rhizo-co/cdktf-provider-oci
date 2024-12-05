# `dataOciApmSyntheticsMonitors` Submodule <a name="`dataOciApmSyntheticsMonitors` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmSyntheticsMonitors <a name="DataOciApmSyntheticsMonitors" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors oci_apm_synthetics_monitors}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors(scope: Construct, id: string, config: DataOciApmSyntheticsMonitorsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig">DataOciApmSyntheticsMonitorsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig">DataOciApmSyntheticsMonitorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetIsMaintenanceWindowActive">resetIsMaintenanceWindowActive</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetIsMaintenanceWindowSet">resetIsMaintenanceWindowSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetMonitorType">resetMonitorType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetScriptId">resetScriptId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetVantagePoint">resetVantagePoint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciApmSyntheticsMonitorsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter">DataOciApmSyntheticsMonitorsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsMaintenanceWindowActive` <a name="resetIsMaintenanceWindowActive" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetIsMaintenanceWindowActive"></a>

```typescript
public resetIsMaintenanceWindowActive(): void
```

##### `resetIsMaintenanceWindowSet` <a name="resetIsMaintenanceWindowSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetIsMaintenanceWindowSet"></a>

```typescript
public resetIsMaintenanceWindowSet(): void
```

##### `resetMonitorType` <a name="resetMonitorType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetMonitorType"></a>

```typescript
public resetMonitorType(): void
```

##### `resetScriptId` <a name="resetScriptId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetScriptId"></a>

```typescript
public resetScriptId(): void
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetVantagePoint` <a name="resetVantagePoint" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetVantagePoint"></a>

```typescript
public resetVantagePoint(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApmSyntheticsMonitors resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.isConstruct"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.isTerraformElement"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.isTerraformDataSource"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.generateConfigForImport"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciApmSyntheticsMonitors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciApmSyntheticsMonitors to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciApmSyntheticsMonitors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmSyntheticsMonitors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList">DataOciApmSyntheticsMonitorsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.monitorCollection">monitorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList">DataOciApmSyntheticsMonitorsMonitorCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.apmDomainIdInput">apmDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter">DataOciApmSyntheticsMonitorsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.isMaintenanceWindowActiveInput">isMaintenanceWindowActiveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.isMaintenanceWindowSetInput">isMaintenanceWindowSetInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.monitorTypeInput">monitorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.scriptIdInput">scriptIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.vantagePointInput">vantagePointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.apmDomainId">apmDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.isMaintenanceWindowActive">isMaintenanceWindowActive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.isMaintenanceWindowSet">isMaintenanceWindowSet</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.monitorType">monitorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.scriptId">scriptId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.vantagePoint">vantagePoint</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.filter"></a>

```typescript
public readonly filter: DataOciApmSyntheticsMonitorsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList">DataOciApmSyntheticsMonitorsFilterList</a>

---

##### `monitorCollection`<sup>Required</sup> <a name="monitorCollection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.monitorCollection"></a>

```typescript
public readonly monitorCollection: DataOciApmSyntheticsMonitorsMonitorCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList">DataOciApmSyntheticsMonitorsMonitorCollectionList</a>

---

##### `apmDomainIdInput`<sup>Optional</sup> <a name="apmDomainIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.apmDomainIdInput"></a>

```typescript
public readonly apmDomainIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciApmSyntheticsMonitorsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter">DataOciApmSyntheticsMonitorsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isMaintenanceWindowActiveInput`<sup>Optional</sup> <a name="isMaintenanceWindowActiveInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.isMaintenanceWindowActiveInput"></a>

```typescript
public readonly isMaintenanceWindowActiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isMaintenanceWindowSetInput`<sup>Optional</sup> <a name="isMaintenanceWindowSetInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.isMaintenanceWindowSetInput"></a>

```typescript
public readonly isMaintenanceWindowSetInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `monitorTypeInput`<sup>Optional</sup> <a name="monitorTypeInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.monitorTypeInput"></a>

```typescript
public readonly monitorTypeInput: string;
```

- *Type:* string

---

##### `scriptIdInput`<sup>Optional</sup> <a name="scriptIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.scriptIdInput"></a>

```typescript
public readonly scriptIdInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `vantagePointInput`<sup>Optional</sup> <a name="vantagePointInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.vantagePointInput"></a>

```typescript
public readonly vantagePointInput: string;
```

- *Type:* string

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.apmDomainId"></a>

```typescript
public readonly apmDomainId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isMaintenanceWindowActive`<sup>Required</sup> <a name="isMaintenanceWindowActive" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.isMaintenanceWindowActive"></a>

```typescript
public readonly isMaintenanceWindowActive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isMaintenanceWindowSet`<sup>Required</sup> <a name="isMaintenanceWindowSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.isMaintenanceWindowSet"></a>

```typescript
public readonly isMaintenanceWindowSet: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `monitorType`<sup>Required</sup> <a name="monitorType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.monitorType"></a>

```typescript
public readonly monitorType: string;
```

- *Type:* string

---

##### `scriptId`<sup>Required</sup> <a name="scriptId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.scriptId"></a>

```typescript
public readonly scriptId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `vantagePoint`<sup>Required</sup> <a name="vantagePoint" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.vantagePoint"></a>

```typescript
public readonly vantagePoint: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmSyntheticsMonitorsConfig <a name="DataOciApmSyntheticsMonitorsConfig" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsMonitorsConfig: dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.apmDomainId">apmDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#apm_domain_id DataOciApmSyntheticsMonitors#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#display_name DataOciApmSyntheticsMonitors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter">DataOciApmSyntheticsMonitorsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#id DataOciApmSyntheticsMonitors#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.isMaintenanceWindowActive">isMaintenanceWindowActive</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#is_maintenance_window_active DataOciApmSyntheticsMonitors#is_maintenance_window_active}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.isMaintenanceWindowSet">isMaintenanceWindowSet</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#is_maintenance_window_set DataOciApmSyntheticsMonitors#is_maintenance_window_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.monitorType">monitorType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#monitor_type DataOciApmSyntheticsMonitors#monitor_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.scriptId">scriptId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#script_id DataOciApmSyntheticsMonitors#script_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#status DataOciApmSyntheticsMonitors#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.vantagePoint">vantagePoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#vantage_point DataOciApmSyntheticsMonitors#vantage_point}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.apmDomainId"></a>

```typescript
public readonly apmDomainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#apm_domain_id DataOciApmSyntheticsMonitors#apm_domain_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#display_name DataOciApmSyntheticsMonitors#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciApmSyntheticsMonitorsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter">DataOciApmSyntheticsMonitorsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#filter DataOciApmSyntheticsMonitors#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#id DataOciApmSyntheticsMonitors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isMaintenanceWindowActive`<sup>Optional</sup> <a name="isMaintenanceWindowActive" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.isMaintenanceWindowActive"></a>

```typescript
public readonly isMaintenanceWindowActive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#is_maintenance_window_active DataOciApmSyntheticsMonitors#is_maintenance_window_active}.

---

##### `isMaintenanceWindowSet`<sup>Optional</sup> <a name="isMaintenanceWindowSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.isMaintenanceWindowSet"></a>

```typescript
public readonly isMaintenanceWindowSet: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#is_maintenance_window_set DataOciApmSyntheticsMonitors#is_maintenance_window_set}.

---

##### `monitorType`<sup>Optional</sup> <a name="monitorType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.monitorType"></a>

```typescript
public readonly monitorType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#monitor_type DataOciApmSyntheticsMonitors#monitor_type}.

---

##### `scriptId`<sup>Optional</sup> <a name="scriptId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.scriptId"></a>

```typescript
public readonly scriptId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#script_id DataOciApmSyntheticsMonitors#script_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#status DataOciApmSyntheticsMonitors#status}.

---

##### `vantagePoint`<sup>Optional</sup> <a name="vantagePoint" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.vantagePoint"></a>

```typescript
public readonly vantagePoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#vantage_point DataOciApmSyntheticsMonitors#vantage_point}.

---

### DataOciApmSyntheticsMonitorsFilter <a name="DataOciApmSyntheticsMonitorsFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsMonitorsFilter: dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#name DataOciApmSyntheticsMonitors#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#values DataOciApmSyntheticsMonitors#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#regex DataOciApmSyntheticsMonitors#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#name DataOciApmSyntheticsMonitors#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#values DataOciApmSyntheticsMonitors#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#regex DataOciApmSyntheticsMonitors#regex}.

---

### DataOciApmSyntheticsMonitorsMonitorCollection <a name="DataOciApmSyntheticsMonitorsMonitorCollection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollection.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsMonitorsMonitorCollection: dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollection = { ... }
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItems <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItems.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsMonitorsMonitorCollectionItems: dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItems = { ... }
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration: dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration = { ... }
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration: dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration = { ... }
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails: dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails = { ... }
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate: dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate = { ... }
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey: dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey = { ... }
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails: dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails = { ... }
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword: dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword = { ... }
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails: dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails = { ... }
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration: dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration = { ... }
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails: dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails = { ... }
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword: dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword = { ... }
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration: dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration = { ... }
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails: dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails = { ... }
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders: dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders = { ... }
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders: dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders = { ... }
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams: dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams = { ... }
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts: dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts = { ... }
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule: dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule = { ... }
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters: dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters = { ... }
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter: dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter = { ... }
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints: dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmSyntheticsMonitorsFilterList <a name="DataOciApmSyntheticsMonitorsFilterList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsMonitorsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter">DataOciApmSyntheticsMonitorsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciApmSyntheticsMonitorsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter">DataOciApmSyntheticsMonitorsFilter</a>[]

---


### DataOciApmSyntheticsMonitorsFilterOutputReference <a name="DataOciApmSyntheticsMonitorsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter">DataOciApmSyntheticsMonitorsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciApmSyntheticsMonitorsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter">DataOciApmSyntheticsMonitorsFilter</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.property.maxAllowedFailuresPerInterval">maxAllowedFailuresPerInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.property.minAllowedRunsPerInterval">minAllowedRunsPerInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration">DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxAllowedFailuresPerInterval`<sup>Required</sup> <a name="maxAllowedFailuresPerInterval" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.property.maxAllowedFailuresPerInterval"></a>

```typescript
public readonly maxAllowedFailuresPerInterval: number;
```

- *Type:* number

---

##### `minAllowedRunsPerInterval`<sup>Required</sup> <a name="minAllowedRunsPerInterval" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.property.minAllowedRunsPerInterval"></a>

```typescript
public readonly minAllowedRunsPerInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration">DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.property.clientCertificate">clientCertificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.property.privateKey">privateKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList</a>

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.property.privateKey"></a>

```typescript
public readonly privateKey: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.property.password">password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.property.password"></a>

```typescript
public readonly password: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList</a>

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.passwordType">passwordType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.vaultSecretId">vaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `passwordType`<sup>Required</sup> <a name="passwordType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.passwordType"></a>

```typescript
public readonly passwordType: string;
```

- *Type:* string

---

##### `vaultSecretId`<sup>Required</sup> <a name="vaultSecretId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.vaultSecretId"></a>

```typescript
public readonly vaultSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.property.databaseWallet">databaseWallet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseWallet`<sup>Required</sup> <a name="databaseWallet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.property.databaseWallet"></a>

```typescript
public readonly databaseWallet: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.property.isOverrideDns">isOverrideDns</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.property.overrideDnsIp">overrideDnsIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isOverrideDns`<sup>Required</sup> <a name="isOverrideDns" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.property.isOverrideDns"></a>

```typescript
public readonly isOverrideDns: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `overrideDnsIp`<sup>Required</sup> <a name="overrideDnsIp" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.property.overrideDnsIp"></a>

```typescript
public readonly overrideDnsIp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.property.password">password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.property.password"></a>

```typescript
public readonly password: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList</a>

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.passwordType">passwordType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.vaultSecretId">vaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `passwordType`<sup>Required</sup> <a name="passwordType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.passwordType"></a>

```typescript
public readonly passwordType: string;
```

- *Type:* string

---

##### `vaultSecretId`<sup>Required</sup> <a name="vaultSecretId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.vaultSecretId"></a>

```typescript
public readonly vaultSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.numberOfHops">numberOfHops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.probeMode">probeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.probePerHop">probePerHop</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.transmissionRate">transmissionRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `numberOfHops`<sup>Required</sup> <a name="numberOfHops" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.numberOfHops"></a>

```typescript
public readonly numberOfHops: number;
```

- *Type:* number

---

##### `probeMode`<sup>Required</sup> <a name="probeMode" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.probeMode"></a>

```typescript
public readonly probeMode: string;
```

- *Type:* string

---

##### `probePerHop`<sup>Required</sup> <a name="probePerHop" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.probePerHop"></a>

```typescript
public readonly probePerHop: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `transmissionRate`<sup>Required</sup> <a name="transmissionRate" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.transmissionRate"></a>

```typescript
public readonly transmissionRate: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.clientCertificateDetails">clientCertificateDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.configType">configType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.connectionString">connectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.databaseAuthenticationDetails">databaseAuthenticationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.databaseConnectionType">databaseConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.databaseRole">databaseRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.databaseType">databaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.databaseWalletDetails">databaseWalletDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.dnsConfiguration">dnsConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.downloadSizeLimitInBytes">downloadSizeLimitInBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.ftpBasicAuthenticationDetails">ftpBasicAuthenticationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.ftpProtocol">ftpProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.ftpRequestType">ftpRequestType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isActiveMode">isActiveMode</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isCertificateValidationEnabled">isCertificateValidationEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isDefaultSnapshotEnabled">isDefaultSnapshotEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isFailureRetried">isFailureRetried</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isQueryRecursive">isQueryRecursive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isRedirectionEnabled">isRedirectionEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.nameServer">nameServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.recordType">recordType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.reqAuthenticationDetails">reqAuthenticationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.reqAuthenticationScheme">reqAuthenticationScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.requestHeaders">requestHeaders</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.requestMethod">requestMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.requestPostBody">requestPostBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.requestQueryParams">requestQueryParams</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.uploadFileSizeInBytes">uploadFileSizeInBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.verifyResponseCodes">verifyResponseCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.verifyResponseContent">verifyResponseContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.verifyTexts">verifyTexts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientCertificateDetails`<sup>Required</sup> <a name="clientCertificateDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.clientCertificateDetails"></a>

```typescript
public readonly clientCertificateDetails: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList</a>

---

##### `configType`<sup>Required</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.configType"></a>

```typescript
public readonly configType: string;
```

- *Type:* string

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

---

##### `databaseAuthenticationDetails`<sup>Required</sup> <a name="databaseAuthenticationDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.databaseAuthenticationDetails"></a>

```typescript
public readonly databaseAuthenticationDetails: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList</a>

---

##### `databaseConnectionType`<sup>Required</sup> <a name="databaseConnectionType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.databaseConnectionType"></a>

```typescript
public readonly databaseConnectionType: string;
```

- *Type:* string

---

##### `databaseRole`<sup>Required</sup> <a name="databaseRole" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.databaseRole"></a>

```typescript
public readonly databaseRole: string;
```

- *Type:* string

---

##### `databaseType`<sup>Required</sup> <a name="databaseType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.databaseType"></a>

```typescript
public readonly databaseType: string;
```

- *Type:* string

---

##### `databaseWalletDetails`<sup>Required</sup> <a name="databaseWalletDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.databaseWalletDetails"></a>

```typescript
public readonly databaseWalletDetails: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList</a>

---

##### `dnsConfiguration`<sup>Required</sup> <a name="dnsConfiguration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.dnsConfiguration"></a>

```typescript
public readonly dnsConfiguration: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList</a>

---

##### `downloadSizeLimitInBytes`<sup>Required</sup> <a name="downloadSizeLimitInBytes" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.downloadSizeLimitInBytes"></a>

```typescript
public readonly downloadSizeLimitInBytes: number;
```

- *Type:* number

---

##### `ftpBasicAuthenticationDetails`<sup>Required</sup> <a name="ftpBasicAuthenticationDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.ftpBasicAuthenticationDetails"></a>

```typescript
public readonly ftpBasicAuthenticationDetails: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList</a>

---

##### `ftpProtocol`<sup>Required</sup> <a name="ftpProtocol" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.ftpProtocol"></a>

```typescript
public readonly ftpProtocol: string;
```

- *Type:* string

---

##### `ftpRequestType`<sup>Required</sup> <a name="ftpRequestType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.ftpRequestType"></a>

```typescript
public readonly ftpRequestType: string;
```

- *Type:* string

---

##### `isActiveMode`<sup>Required</sup> <a name="isActiveMode" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isActiveMode"></a>

```typescript
public readonly isActiveMode: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isCertificateValidationEnabled`<sup>Required</sup> <a name="isCertificateValidationEnabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isCertificateValidationEnabled"></a>

```typescript
public readonly isCertificateValidationEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isDefaultSnapshotEnabled`<sup>Required</sup> <a name="isDefaultSnapshotEnabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isDefaultSnapshotEnabled"></a>

```typescript
public readonly isDefaultSnapshotEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isFailureRetried`<sup>Required</sup> <a name="isFailureRetried" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isFailureRetried"></a>

```typescript
public readonly isFailureRetried: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isQueryRecursive`<sup>Required</sup> <a name="isQueryRecursive" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isQueryRecursive"></a>

```typescript
public readonly isQueryRecursive: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isRedirectionEnabled`<sup>Required</sup> <a name="isRedirectionEnabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isRedirectionEnabled"></a>

```typescript
public readonly isRedirectionEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `nameServer`<sup>Required</sup> <a name="nameServer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.nameServer"></a>

```typescript
public readonly nameServer: string;
```

- *Type:* string

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList</a>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `recordType`<sup>Required</sup> <a name="recordType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.recordType"></a>

```typescript
public readonly recordType: string;
```

- *Type:* string

---

##### `reqAuthenticationDetails`<sup>Required</sup> <a name="reqAuthenticationDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.reqAuthenticationDetails"></a>

```typescript
public readonly reqAuthenticationDetails: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList</a>

---

##### `reqAuthenticationScheme`<sup>Required</sup> <a name="reqAuthenticationScheme" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.reqAuthenticationScheme"></a>

```typescript
public readonly reqAuthenticationScheme: string;
```

- *Type:* string

---

##### `requestHeaders`<sup>Required</sup> <a name="requestHeaders" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.requestHeaders"></a>

```typescript
public readonly requestHeaders: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList</a>

---

##### `requestMethod`<sup>Required</sup> <a name="requestMethod" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.requestMethod"></a>

```typescript
public readonly requestMethod: string;
```

- *Type:* string

---

##### `requestPostBody`<sup>Required</sup> <a name="requestPostBody" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.requestPostBody"></a>

```typescript
public readonly requestPostBody: string;
```

- *Type:* string

---

##### `requestQueryParams`<sup>Required</sup> <a name="requestQueryParams" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.requestQueryParams"></a>

```typescript
public readonly requestQueryParams: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList</a>

---

##### `uploadFileSizeInBytes`<sup>Required</sup> <a name="uploadFileSizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.uploadFileSizeInBytes"></a>

```typescript
public readonly uploadFileSizeInBytes: number;
```

- *Type:* number

---

##### `verifyResponseCodes`<sup>Required</sup> <a name="verifyResponseCodes" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.verifyResponseCodes"></a>

```typescript
public readonly verifyResponseCodes: string[];
```

- *Type:* string[]

---

##### `verifyResponseContent`<sup>Required</sup> <a name="verifyResponseContent" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.verifyResponseContent"></a>

```typescript
public readonly verifyResponseContent: string;
```

- *Type:* string

---

##### `verifyTexts`<sup>Required</sup> <a name="verifyTexts" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.verifyTexts"></a>

```typescript
public readonly verifyTexts: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerName">headerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerValue">headerValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerValue"></a>

```typescript
public readonly headerValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authHeaders">authHeaders</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authRequestMethod">authRequestMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authRequestPostBody">authRequestPostBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authToken">authToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authUrl">authUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authUserName">authUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authUserPassword">authUserPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.oauthScheme">oauthScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authHeaders`<sup>Required</sup> <a name="authHeaders" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authHeaders"></a>

```typescript
public readonly authHeaders: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList</a>

---

##### `authRequestMethod`<sup>Required</sup> <a name="authRequestMethod" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authRequestMethod"></a>

```typescript
public readonly authRequestMethod: string;
```

- *Type:* string

---

##### `authRequestPostBody`<sup>Required</sup> <a name="authRequestPostBody" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authRequestPostBody"></a>

```typescript
public readonly authRequestPostBody: string;
```

- *Type:* string

---

##### `authToken`<sup>Required</sup> <a name="authToken" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authToken"></a>

```typescript
public readonly authToken: string;
```

- *Type:* string

---

##### `authUrl`<sup>Required</sup> <a name="authUrl" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authUrl"></a>

```typescript
public readonly authUrl: string;
```

- *Type:* string

---

##### `authUserName`<sup>Required</sup> <a name="authUserName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authUserName"></a>

```typescript
public readonly authUserName: string;
```

- *Type:* string

---

##### `authUserPassword`<sup>Required</sup> <a name="authUserPassword" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authUserPassword"></a>

```typescript
public readonly authUserPassword: string;
```

- *Type:* string

---

##### `oauthScheme`<sup>Required</sup> <a name="oauthScheme" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.oauthScheme"></a>

```typescript
public readonly oauthScheme: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.property.headerName">headerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.property.headerValue">headerValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.property.headerValue"></a>

```typescript
public readonly headerValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.property.paramName">paramName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.property.paramValue">paramValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `paramName`<sup>Required</sup> <a name="paramName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.property.paramName"></a>

```typescript
public readonly paramName: string;
```

- *Type:* string

---

##### `paramValue`<sup>Required</sup> <a name="paramValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.property.paramValue"></a>

```typescript
public readonly paramValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.property.timeEnded">timeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule">DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule">DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.apmDomainId">apmDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.availabilityConfiguration">availabilityConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.batchIntervalInSeconds">batchIntervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.configuration">configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.isIpv6">isIpv6</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.isRunNow">isRunNow</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.isRunOnce">isRunOnce</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.lastUpdatedBy">lastUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.maintenanceWindowSchedule">maintenanceWindowSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.monitorType">monitorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.repeatIntervalInSeconds">repeatIntervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.schedulingPolicy">schedulingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.scriptId">scriptId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.scriptName">scriptName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.scriptParameters">scriptParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.vantagePointCount">vantagePointCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.vantagePoints">vantagePoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItems">DataOciApmSyntheticsMonitorsMonitorCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.apmDomainId"></a>

```typescript
public readonly apmDomainId: string;
```

- *Type:* string

---

##### `availabilityConfiguration`<sup>Required</sup> <a name="availabilityConfiguration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.availabilityConfiguration"></a>

```typescript
public readonly availabilityConfiguration: DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList</a>

---

##### `batchIntervalInSeconds`<sup>Required</sup> <a name="batchIntervalInSeconds" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.batchIntervalInSeconds"></a>

```typescript
public readonly batchIntervalInSeconds: number;
```

- *Type:* number

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.configuration"></a>

```typescript
public readonly configuration: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList</a>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isIpv6`<sup>Required</sup> <a name="isIpv6" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.isIpv6"></a>

```typescript
public readonly isIpv6: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isRunNow`<sup>Required</sup> <a name="isRunNow" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.isRunNow"></a>

```typescript
public readonly isRunNow: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isRunOnce`<sup>Required</sup> <a name="isRunOnce" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.isRunOnce"></a>

```typescript
public readonly isRunOnce: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lastUpdatedBy`<sup>Required</sup> <a name="lastUpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.lastUpdatedBy"></a>

```typescript
public readonly lastUpdatedBy: string;
```

- *Type:* string

---

##### `maintenanceWindowSchedule`<sup>Required</sup> <a name="maintenanceWindowSchedule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.maintenanceWindowSchedule"></a>

```typescript
public readonly maintenanceWindowSchedule: DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList</a>

---

##### `monitorType`<sup>Required</sup> <a name="monitorType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.monitorType"></a>

```typescript
public readonly monitorType: string;
```

- *Type:* string

---

##### `repeatIntervalInSeconds`<sup>Required</sup> <a name="repeatIntervalInSeconds" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.repeatIntervalInSeconds"></a>

```typescript
public readonly repeatIntervalInSeconds: number;
```

- *Type:* number

---

##### `schedulingPolicy`<sup>Required</sup> <a name="schedulingPolicy" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.schedulingPolicy"></a>

```typescript
public readonly schedulingPolicy: string;
```

- *Type:* string

---

##### `scriptId`<sup>Required</sup> <a name="scriptId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.scriptId"></a>

```typescript
public readonly scriptId: string;
```

- *Type:* string

---

##### `scriptName`<sup>Required</sup> <a name="scriptName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.scriptName"></a>

```typescript
public readonly scriptName: string;
```

- *Type:* string

---

##### `scriptParameters`<sup>Required</sup> <a name="scriptParameters" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.scriptParameters"></a>

```typescript
public readonly scriptParameters: DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `vantagePointCount`<sup>Required</sup> <a name="vantagePointCount" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.vantagePointCount"></a>

```typescript
public readonly vantagePointCount: number;
```

- *Type:* number

---

##### `vantagePoints`<sup>Required</sup> <a name="vantagePoints" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.vantagePoints"></a>

```typescript
public readonly vantagePoints: DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsMonitorsMonitorCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItems">DataOciApmSyntheticsMonitorsMonitorCollectionItems</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.property.paramName">paramName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.property.paramValue">paramValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter">DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `paramName`<sup>Required</sup> <a name="paramName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.property.paramName"></a>

```typescript
public readonly paramName: string;
```

- *Type:* string

---

##### `paramValue`<sup>Required</sup> <a name="paramValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.property.paramValue"></a>

```typescript
public readonly paramValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter">DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.isOverwritten">isOverwritten</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.isSecret">isSecret</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.monitorScriptParameter">monitorScriptParameter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.paramName">paramName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.paramValue">paramValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters">DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isOverwritten`<sup>Required</sup> <a name="isOverwritten" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.isOverwritten"></a>

```typescript
public readonly isOverwritten: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isSecret`<sup>Required</sup> <a name="isSecret" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.isSecret"></a>

```typescript
public readonly isSecret: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `monitorScriptParameter`<sup>Required</sup> <a name="monitorScriptParameter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.monitorScriptParameter"></a>

```typescript
public readonly monitorScriptParameter: DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList</a>

---

##### `paramName`<sup>Required</sup> <a name="paramName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.paramName"></a>

```typescript
public readonly paramName: string;
```

- *Type:* string

---

##### `paramValue`<sup>Required</sup> <a name="paramValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.paramValue"></a>

```typescript
public readonly paramValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters">DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.workerList">workerList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints">DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `workerList`<sup>Required</sup> <a name="workerList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.workerList"></a>

```typescript
public readonly workerList: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints">DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsMonitors } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollection">DataOciApmSyntheticsMonitorsMonitorCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciApmSyntheticsMonitorsMonitorCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsMonitorsMonitorCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollection">DataOciApmSyntheticsMonitorsMonitorCollection</a>

---



