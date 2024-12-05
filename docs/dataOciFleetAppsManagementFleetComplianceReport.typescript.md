# `dataOciFleetAppsManagementFleetComplianceReport` Submodule <a name="`dataOciFleetAppsManagementFleetComplianceReport` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementFleetComplianceReport <a name="DataOciFleetAppsManagementFleetComplianceReport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report oci_fleet_apps_management_fleet_compliance_report}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleetComplianceReport } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport(scope: Construct, id: string, config: DataOciFleetAppsManagementFleetComplianceReportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig">DataOciFleetAppsManagementFleetComplianceReportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig">DataOciFleetAppsManagementFleetComplianceReportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementFleetComplianceReport resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isConstruct"></a>

```typescript
import { dataOciFleetAppsManagementFleetComplianceReport } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isTerraformElement"></a>

```typescript
import { dataOciFleetAppsManagementFleetComplianceReport } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isTerraformDataSource"></a>

```typescript
import { dataOciFleetAppsManagementFleetComplianceReport } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.generateConfigForImport"></a>

```typescript
import { dataOciFleetAppsManagementFleetComplianceReport } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciFleetAppsManagementFleetComplianceReport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFleetAppsManagementFleetComplianceReport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFleetAppsManagementFleetComplianceReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementFleetComplianceReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.complianceState">complianceState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.resources">resources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList">DataOciFleetAppsManagementFleetComplianceReportResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.complianceReportIdInput">complianceReportIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.fleetIdInput">fleetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.complianceReportId">complianceReportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.fleetId">fleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `complianceState`<sup>Required</sup> <a name="complianceState" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.complianceState"></a>

```typescript
public readonly complianceState: string;
```

- *Type:* string

---

##### `resources`<sup>Required</sup> <a name="resources" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.resources"></a>

```typescript
public readonly resources: DataOciFleetAppsManagementFleetComplianceReportResourcesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList">DataOciFleetAppsManagementFleetComplianceReportResourcesList</a>

---

##### `complianceReportIdInput`<sup>Optional</sup> <a name="complianceReportIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.complianceReportIdInput"></a>

```typescript
public readonly complianceReportIdInput: string;
```

- *Type:* string

---

##### `fleetIdInput`<sup>Optional</sup> <a name="fleetIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.fleetIdInput"></a>

```typescript
public readonly fleetIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `complianceReportId`<sup>Required</sup> <a name="complianceReportId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.complianceReportId"></a>

```typescript
public readonly complianceReportId: string;
```

- *Type:* string

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementFleetComplianceReportConfig <a name="DataOciFleetAppsManagementFleetComplianceReportConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleetComplianceReport } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementFleetComplianceReportConfig: dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.complianceReportId">complianceReportId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#compliance_report_id DataOciFleetAppsManagementFleetComplianceReport#compliance_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.fleetId">fleetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#fleet_id DataOciFleetAppsManagementFleetComplianceReport#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#id DataOciFleetAppsManagementFleetComplianceReport#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `complianceReportId`<sup>Required</sup> <a name="complianceReportId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.complianceReportId"></a>

```typescript
public readonly complianceReportId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#compliance_report_id DataOciFleetAppsManagementFleetComplianceReport#compliance_report_id}.

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#fleet_id DataOciFleetAppsManagementFleetComplianceReport#fleet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#id DataOciFleetAppsManagementFleetComplianceReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciFleetAppsManagementFleetComplianceReportResources <a name="DataOciFleetAppsManagementFleetComplianceReportResources" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResources.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleetComplianceReport } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementFleetComplianceReportResources: dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResources = { ... }
```


### DataOciFleetAppsManagementFleetComplianceReportResourcesProducts <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProducts" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProducts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProducts.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleetComplianceReport } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementFleetComplianceReportResourcesProducts: dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProducts = { ... }
```


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleetComplianceReport } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets: dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets = { ... }
```


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleetComplianceReport } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches: dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches = { ... }
```


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleetComplianceReport } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches: dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementFleetComplianceReportResourcesList <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleetComplianceReport } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleetComplianceReport } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.compartment">compartment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.complianceState">complianceState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.products">products</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceRegion">resourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.tenancyId">tenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.tenancyName">tenancyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResources">DataOciFleetAppsManagementFleetComplianceReportResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartment`<sup>Required</sup> <a name="compartment" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.compartment"></a>

```typescript
public readonly compartment: string;
```

- *Type:* string

---

##### `complianceState`<sup>Required</sup> <a name="complianceState" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.complianceState"></a>

```typescript
public readonly complianceState: string;
```

- *Type:* string

---

##### `products`<sup>Required</sup> <a name="products" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.products"></a>

```typescript
public readonly products: DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList</a>

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `resourceRegion`<sup>Required</sup> <a name="resourceRegion" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceRegion"></a>

```typescript
public readonly resourceRegion: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.tenancyId"></a>

```typescript
public readonly tenancyId: string;
```

- *Type:* string

---

##### `tenancyName`<sup>Required</sup> <a name="tenancyName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.tenancyName"></a>

```typescript
public readonly tenancyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementFleetComplianceReportResources;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResources">DataOciFleetAppsManagementFleetComplianceReportResources</a>

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleetComplianceReport } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleetComplianceReport } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.productName">productName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.targets">targets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProducts">DataOciFleetAppsManagementFleetComplianceReportResourcesProducts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `productName`<sup>Required</sup> <a name="productName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.productName"></a>

```typescript
public readonly productName: string;
```

- *Type:* string

---

##### `targets`<sup>Required</sup> <a name="targets" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.targets"></a>

```typescript
public readonly targets: DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementFleetComplianceReportResourcesProducts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProducts">DataOciFleetAppsManagementFleetComplianceReportResourcesProducts</a>

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleetComplianceReport } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleetComplianceReport } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.patchDescription">patchDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.patchName">patchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.patchType">patchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.timeApplied">timeApplied</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.timeReleased">timeReleased</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `patchDescription`<sup>Required</sup> <a name="patchDescription" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.patchDescription"></a>

```typescript
public readonly patchDescription: string;
```

- *Type:* string

---

##### `patchName`<sup>Required</sup> <a name="patchName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.patchName"></a>

```typescript
public readonly patchName: string;
```

- *Type:* string

---

##### `patchType`<sup>Required</sup> <a name="patchType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.patchType"></a>

```typescript
public readonly patchType: string;
```

- *Type:* string

---

##### `timeApplied`<sup>Required</sup> <a name="timeApplied" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.timeApplied"></a>

```typescript
public readonly timeApplied: string;
```

- *Type:* string

---

##### `timeReleased`<sup>Required</sup> <a name="timeReleased" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.timeReleased"></a>

```typescript
public readonly timeReleased: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches</a>

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleetComplianceReport } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleetComplianceReport } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.complianceState">complianceState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.installedPatches">installedPatches</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.recommendedPatches">recommendedPatches</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.targetName">targetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `complianceState`<sup>Required</sup> <a name="complianceState" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.complianceState"></a>

```typescript
public readonly complianceState: string;
```

- *Type:* string

---

##### `installedPatches`<sup>Required</sup> <a name="installedPatches" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.installedPatches"></a>

```typescript
public readonly installedPatches: DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList</a>

---

##### `recommendedPatches`<sup>Required</sup> <a name="recommendedPatches" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.recommendedPatches"></a>

```typescript
public readonly recommendedPatches: DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList</a>

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.targetName"></a>

```typescript
public readonly targetName: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets</a>

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleetComplianceReport } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementFleetComplianceReport } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.patchDescription">patchDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.patchName">patchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.patchType">patchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.timeApplied">timeApplied</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.timeReleased">timeReleased</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `patchDescription`<sup>Required</sup> <a name="patchDescription" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.patchDescription"></a>

```typescript
public readonly patchDescription: string;
```

- *Type:* string

---

##### `patchName`<sup>Required</sup> <a name="patchName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.patchName"></a>

```typescript
public readonly patchName: string;
```

- *Type:* string

---

##### `patchType`<sup>Required</sup> <a name="patchType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.patchType"></a>

```typescript
public readonly patchType: string;
```

- *Type:* string

---

##### `timeApplied`<sup>Required</sup> <a name="timeApplied" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.timeApplied"></a>

```typescript
public readonly timeApplied: string;
```

- *Type:* string

---

##### `timeReleased`<sup>Required</sup> <a name="timeReleased" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.timeReleased"></a>

```typescript
public readonly timeReleased: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches</a>

---



