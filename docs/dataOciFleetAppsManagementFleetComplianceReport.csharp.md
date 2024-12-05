# `dataOciFleetAppsManagementFleetComplianceReport` Submodule <a name="`dataOciFleetAppsManagementFleetComplianceReport` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementFleetComplianceReport <a name="DataOciFleetAppsManagementFleetComplianceReport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report oci_fleet_apps_management_fleet_compliance_report}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementFleetComplianceReport(Construct Scope, string Id, DataOciFleetAppsManagementFleetComplianceReportConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig">DataOciFleetAppsManagementFleetComplianceReportConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig">DataOciFleetAppsManagementFleetComplianceReportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementFleetComplianceReport resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementFleetComplianceReport.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementFleetComplianceReport.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementFleetComplianceReport.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementFleetComplianceReport.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciFleetAppsManagementFleetComplianceReport resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFleetAppsManagementFleetComplianceReport to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFleetAppsManagementFleetComplianceReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementFleetComplianceReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.complianceState">ComplianceState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.resources">Resources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList">DataOciFleetAppsManagementFleetComplianceReportResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.complianceReportIdInput">ComplianceReportIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.fleetIdInput">FleetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.complianceReportId">ComplianceReportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.fleetId">FleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ComplianceState`<sup>Required</sup> <a name="ComplianceState" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.complianceState"></a>

```csharp
public string ComplianceState { get; }
```

- *Type:* string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.resources"></a>

```csharp
public DataOciFleetAppsManagementFleetComplianceReportResourcesList Resources { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList">DataOciFleetAppsManagementFleetComplianceReportResourcesList</a>

---

##### `ComplianceReportIdInput`<sup>Optional</sup> <a name="ComplianceReportIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.complianceReportIdInput"></a>

```csharp
public string ComplianceReportIdInput { get; }
```

- *Type:* string

---

##### `FleetIdInput`<sup>Optional</sup> <a name="FleetIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.fleetIdInput"></a>

```csharp
public string FleetIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ComplianceReportId`<sup>Required</sup> <a name="ComplianceReportId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.complianceReportId"></a>

```csharp
public string ComplianceReportId { get; }
```

- *Type:* string

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.fleetId"></a>

```csharp
public string FleetId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementFleetComplianceReportConfig <a name="DataOciFleetAppsManagementFleetComplianceReportConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementFleetComplianceReportConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ComplianceReportId,
    string FleetId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.complianceReportId">ComplianceReportId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#compliance_report_id DataOciFleetAppsManagementFleetComplianceReport#compliance_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.fleetId">FleetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#fleet_id DataOciFleetAppsManagementFleetComplianceReport#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#id DataOciFleetAppsManagementFleetComplianceReport#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ComplianceReportId`<sup>Required</sup> <a name="ComplianceReportId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.complianceReportId"></a>

```csharp
public string ComplianceReportId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#compliance_report_id DataOciFleetAppsManagementFleetComplianceReport#compliance_report_id}.

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.fleetId"></a>

```csharp
public string FleetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#fleet_id DataOciFleetAppsManagementFleetComplianceReport#fleet_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#id DataOciFleetAppsManagementFleetComplianceReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciFleetAppsManagementFleetComplianceReportResources <a name="DataOciFleetAppsManagementFleetComplianceReportResources" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementFleetComplianceReportResources {

};
```


### DataOciFleetAppsManagementFleetComplianceReportResourcesProducts <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProducts" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProducts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProducts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementFleetComplianceReportResourcesProducts {

};
```


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets {

};
```


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches {

};
```


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementFleetComplianceReportResourcesList <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementFleetComplianceReportResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.get"></a>

```csharp
private DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.compartment">Compartment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.complianceState">ComplianceState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.products">Products</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceRegion">ResourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.tenancyId">TenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.tenancyName">TenancyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResources">DataOciFleetAppsManagementFleetComplianceReportResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Compartment`<sup>Required</sup> <a name="Compartment" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.compartment"></a>

```csharp
public string Compartment { get; }
```

- *Type:* string

---

##### `ComplianceState`<sup>Required</sup> <a name="ComplianceState" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.complianceState"></a>

```csharp
public string ComplianceState { get; }
```

- *Type:* string

---

##### `Products`<sup>Required</sup> <a name="Products" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.products"></a>

```csharp
public DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList Products { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList</a>

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `ResourceRegion`<sup>Required</sup> <a name="ResourceRegion" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceRegion"></a>

```csharp
public string ResourceRegion { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.tenancyId"></a>

```csharp
public string TenancyId { get; }
```

- *Type:* string

---

##### `TenancyName`<sup>Required</sup> <a name="TenancyName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.tenancyName"></a>

```csharp
public string TenancyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementFleetComplianceReportResources InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResources">DataOciFleetAppsManagementFleetComplianceReportResources</a>

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.get"></a>

```csharp
private DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.productName">ProductName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.targets">Targets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProducts">DataOciFleetAppsManagementFleetComplianceReportResourcesProducts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProductName`<sup>Required</sup> <a name="ProductName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.productName"></a>

```csharp
public string ProductName { get; }
```

- *Type:* string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.targets"></a>

```csharp
public DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList Targets { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementFleetComplianceReportResourcesProducts InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProducts">DataOciFleetAppsManagementFleetComplianceReportResourcesProducts</a>

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.get"></a>

```csharp
private DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.patchDescription">PatchDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.patchName">PatchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.patchType">PatchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.timeApplied">TimeApplied</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.timeReleased">TimeReleased</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PatchDescription`<sup>Required</sup> <a name="PatchDescription" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.patchDescription"></a>

```csharp
public string PatchDescription { get; }
```

- *Type:* string

---

##### `PatchName`<sup>Required</sup> <a name="PatchName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.patchName"></a>

```csharp
public string PatchName { get; }
```

- *Type:* string

---

##### `PatchType`<sup>Required</sup> <a name="PatchType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.patchType"></a>

```csharp
public string PatchType { get; }
```

- *Type:* string

---

##### `TimeApplied`<sup>Required</sup> <a name="TimeApplied" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.timeApplied"></a>

```csharp
public string TimeApplied { get; }
```

- *Type:* string

---

##### `TimeReleased`<sup>Required</sup> <a name="TimeReleased" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.timeReleased"></a>

```csharp
public string TimeReleased { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches</a>

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.get"></a>

```csharp
private DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.complianceState">ComplianceState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.installedPatches">InstalledPatches</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.recommendedPatches">RecommendedPatches</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.targetName">TargetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComplianceState`<sup>Required</sup> <a name="ComplianceState" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.complianceState"></a>

```csharp
public string ComplianceState { get; }
```

- *Type:* string

---

##### `InstalledPatches`<sup>Required</sup> <a name="InstalledPatches" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.installedPatches"></a>

```csharp
public DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList InstalledPatches { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList</a>

---

##### `RecommendedPatches`<sup>Required</sup> <a name="RecommendedPatches" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.recommendedPatches"></a>

```csharp
public DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList RecommendedPatches { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList</a>

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `TargetName`<sup>Required</sup> <a name="TargetName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.targetName"></a>

```csharp
public string TargetName { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets</a>

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.get"></a>

```csharp
private DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.patchDescription">PatchDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.patchName">PatchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.patchType">PatchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.timeApplied">TimeApplied</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.timeReleased">TimeReleased</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PatchDescription`<sup>Required</sup> <a name="PatchDescription" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.patchDescription"></a>

```csharp
public string PatchDescription { get; }
```

- *Type:* string

---

##### `PatchName`<sup>Required</sup> <a name="PatchName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.patchName"></a>

```csharp
public string PatchName { get; }
```

- *Type:* string

---

##### `PatchType`<sup>Required</sup> <a name="PatchType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.patchType"></a>

```csharp
public string PatchType { get; }
```

- *Type:* string

---

##### `TimeApplied`<sup>Required</sup> <a name="TimeApplied" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.timeApplied"></a>

```csharp
public string TimeApplied { get; }
```

- *Type:* string

---

##### `TimeReleased`<sup>Required</sup> <a name="TimeReleased" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.timeReleased"></a>

```csharp
public string TimeReleased { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches</a>

---



