# `dataOciDataSafeMaskingPolicyHealthReportLogs` Submodule <a name="`dataOciDataSafeMaskingPolicyHealthReportLogs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeMaskingPolicyHealthReportLogs <a name="DataOciDataSafeMaskingPolicyHealthReportLogs" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs oci_data_safe_masking_policy_health_report_logs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyHealthReportLogs } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs(scope: Construct, id: string, config: DataOciDataSafeMaskingPolicyHealthReportLogsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig">DataOciDataSafeMaskingPolicyHealthReportLogsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig">DataOciDataSafeMaskingPolicyHealthReportLogsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.resetMessageType">resetMessageType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeMaskingPolicyHealthReportLogsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMessageType` <a name="resetMessageType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.resetMessageType"></a>

```typescript
public resetMessageType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeMaskingPolicyHealthReportLogs resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.isConstruct"></a>

```typescript
import { dataOciDataSafeMaskingPolicyHealthReportLogs } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.isTerraformElement"></a>

```typescript
import { dataOciDataSafeMaskingPolicyHealthReportLogs } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeMaskingPolicyHealthReportLogs } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeMaskingPolicyHealthReportLogs } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeMaskingPolicyHealthReportLogs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeMaskingPolicyHealthReportLogs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeMaskingPolicyHealthReportLogs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeMaskingPolicyHealthReportLogs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList">DataOciDataSafeMaskingPolicyHealthReportLogsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.maskingPolicyHealthReportLogCollection">maskingPolicyHealthReportLogCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList">DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.maskingPolicyHealthReportIdInput">maskingPolicyHealthReportIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.messageTypeInput">messageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.maskingPolicyHealthReportId">maskingPolicyHealthReportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.messageType">messageType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeMaskingPolicyHealthReportLogsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList">DataOciDataSafeMaskingPolicyHealthReportLogsFilterList</a>

---

##### `maskingPolicyHealthReportLogCollection`<sup>Required</sup> <a name="maskingPolicyHealthReportLogCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.maskingPolicyHealthReportLogCollection"></a>

```typescript
public readonly maskingPolicyHealthReportLogCollection: DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList">DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeMaskingPolicyHealthReportLogsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maskingPolicyHealthReportIdInput`<sup>Optional</sup> <a name="maskingPolicyHealthReportIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.maskingPolicyHealthReportIdInput"></a>

```typescript
public readonly maskingPolicyHealthReportIdInput: string;
```

- *Type:* string

---

##### `messageTypeInput`<sup>Optional</sup> <a name="messageTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.messageTypeInput"></a>

```typescript
public readonly messageTypeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maskingPolicyHealthReportId`<sup>Required</sup> <a name="maskingPolicyHealthReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.maskingPolicyHealthReportId"></a>

```typescript
public readonly maskingPolicyHealthReportId: string;
```

- *Type:* string

---

##### `messageType`<sup>Required</sup> <a name="messageType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.messageType"></a>

```typescript
public readonly messageType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeMaskingPolicyHealthReportLogsConfig <a name="DataOciDataSafeMaskingPolicyHealthReportLogsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyHealthReportLogs } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeMaskingPolicyHealthReportLogsConfig: dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.maskingPolicyHealthReportId">maskingPolicyHealthReportId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#masking_policy_health_report_id DataOciDataSafeMaskingPolicyHealthReportLogs#masking_policy_health_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#id DataOciDataSafeMaskingPolicyHealthReportLogs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.messageType">messageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#message_type DataOciDataSafeMaskingPolicyHealthReportLogs#message_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `maskingPolicyHealthReportId`<sup>Required</sup> <a name="maskingPolicyHealthReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.maskingPolicyHealthReportId"></a>

```typescript
public readonly maskingPolicyHealthReportId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#masking_policy_health_report_id DataOciDataSafeMaskingPolicyHealthReportLogs#masking_policy_health_report_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeMaskingPolicyHealthReportLogsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#filter DataOciDataSafeMaskingPolicyHealthReportLogs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#id DataOciDataSafeMaskingPolicyHealthReportLogs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `messageType`<sup>Optional</sup> <a name="messageType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.messageType"></a>

```typescript
public readonly messageType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#message_type DataOciDataSafeMaskingPolicyHealthReportLogs#message_type}.

---

### DataOciDataSafeMaskingPolicyHealthReportLogsFilter <a name="DataOciDataSafeMaskingPolicyHealthReportLogsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyHealthReportLogs } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeMaskingPolicyHealthReportLogsFilter: dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#name DataOciDataSafeMaskingPolicyHealthReportLogs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#values DataOciDataSafeMaskingPolicyHealthReportLogs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#regex DataOciDataSafeMaskingPolicyHealthReportLogs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#name DataOciDataSafeMaskingPolicyHealthReportLogs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#values DataOciDataSafeMaskingPolicyHealthReportLogs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#regex DataOciDataSafeMaskingPolicyHealthReportLogs#regex}.

---

### DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection <a name="DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyHealthReportLogs } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection: dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection = { ... }
```


### DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems <a name="DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyHealthReportLogs } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems: dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeMaskingPolicyHealthReportLogsFilterList <a name="DataOciDataSafeMaskingPolicyHealthReportLogsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyHealthReportLogs } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeMaskingPolicyHealthReportLogsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a>[]

---


### DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference <a name="DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyHealthReportLogs } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeMaskingPolicyHealthReportLogsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a>

---


### DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList <a name="DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyHealthReportLogs } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference <a name="DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyHealthReportLogs } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.messageType">messageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.remediation">remediation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems">DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `messageType`<sup>Required</sup> <a name="messageType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.messageType"></a>

```typescript
public readonly messageType: string;
```

- *Type:* string

---

##### `remediation`<sup>Required</sup> <a name="remediation" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.remediation"></a>

```typescript
public readonly remediation: string;
```

- *Type:* string

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems">DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems</a>

---


### DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList <a name="DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyHealthReportLogs } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference <a name="DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyHealthReportLogs } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList">DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection">DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList">DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection">DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection</a>

---



