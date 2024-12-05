# `dataOciOperatorAccessControlAccessRequestAuditLogReport` Submodule <a name="`dataOciOperatorAccessControlAccessRequestAuditLogReport` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOperatorAccessControlAccessRequestAuditLogReport <a name="DataOciOperatorAccessControlAccessRequestAuditLogReport" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request_audit_log_report oci_operator_access_control_access_request_audit_log_report}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlAccessRequestAuditLogReport(Construct Scope, string Id, DataOciOperatorAccessControlAccessRequestAuditLogReportConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig">DataOciOperatorAccessControlAccessRequestAuditLogReportConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig">DataOciOperatorAccessControlAccessRequestAuditLogReportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.resetEnableProcessTree">ResetEnableProcessTree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetEnableProcessTree` <a name="ResetEnableProcessTree" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.resetEnableProcessTree"></a>

```csharp
private void ResetEnableProcessTree()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOperatorAccessControlAccessRequestAuditLogReport resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOperatorAccessControlAccessRequestAuditLogReport.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOperatorAccessControlAccessRequestAuditLogReport.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOperatorAccessControlAccessRequestAuditLogReport.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOperatorAccessControlAccessRequestAuditLogReport.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOperatorAccessControlAccessRequestAuditLogReport resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOperatorAccessControlAccessRequestAuditLogReport to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOperatorAccessControlAccessRequestAuditLogReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request_audit_log_report#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOperatorAccessControlAccessRequestAuditLogReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.auditReportStatus">AuditReportStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.processTree">ProcessTree</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.report">Report</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.timeOfReportGeneration">TimeOfReportGeneration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.accessRequestIdInput">AccessRequestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.enableProcessTreeInput">EnableProcessTreeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.accessRequestId">AccessRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.enableProcessTree">EnableProcessTree</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AuditReportStatus`<sup>Required</sup> <a name="AuditReportStatus" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.auditReportStatus"></a>

```csharp
public string AuditReportStatus { get; }
```

- *Type:* string

---

##### `ProcessTree`<sup>Required</sup> <a name="ProcessTree" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.processTree"></a>

```csharp
public string ProcessTree { get; }
```

- *Type:* string

---

##### `Report`<sup>Required</sup> <a name="Report" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.report"></a>

```csharp
public string Report { get; }
```

- *Type:* string

---

##### `TimeOfReportGeneration`<sup>Required</sup> <a name="TimeOfReportGeneration" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.timeOfReportGeneration"></a>

```csharp
public string TimeOfReportGeneration { get; }
```

- *Type:* string

---

##### `AccessRequestIdInput`<sup>Optional</sup> <a name="AccessRequestIdInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.accessRequestIdInput"></a>

```csharp
public string AccessRequestIdInput { get; }
```

- *Type:* string

---

##### `EnableProcessTreeInput`<sup>Optional</sup> <a name="EnableProcessTreeInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.enableProcessTreeInput"></a>

```csharp
public double EnableProcessTreeInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AccessRequestId`<sup>Required</sup> <a name="AccessRequestId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.accessRequestId"></a>

```csharp
public string AccessRequestId { get; }
```

- *Type:* string

---

##### `EnableProcessTree`<sup>Required</sup> <a name="EnableProcessTree" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.enableProcessTree"></a>

```csharp
public double EnableProcessTree { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOperatorAccessControlAccessRequestAuditLogReportConfig <a name="DataOciOperatorAccessControlAccessRequestAuditLogReportConfig" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlAccessRequestAuditLogReportConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccessRequestId,
    double EnableProcessTree = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.accessRequestId">AccessRequestId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request_audit_log_report#access_request_id DataOciOperatorAccessControlAccessRequestAuditLogReport#access_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.enableProcessTree">EnableProcessTree</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request_audit_log_report#enable_process_tree DataOciOperatorAccessControlAccessRequestAuditLogReport#enable_process_tree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request_audit_log_report#id DataOciOperatorAccessControlAccessRequestAuditLogReport#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccessRequestId`<sup>Required</sup> <a name="AccessRequestId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.accessRequestId"></a>

```csharp
public string AccessRequestId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request_audit_log_report#access_request_id DataOciOperatorAccessControlAccessRequestAuditLogReport#access_request_id}.

---

##### `EnableProcessTree`<sup>Optional</sup> <a name="EnableProcessTree" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.enableProcessTree"></a>

```csharp
public double EnableProcessTree { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request_audit_log_report#enable_process_tree DataOciOperatorAccessControlAccessRequestAuditLogReport#enable_process_tree}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request_audit_log_report#id DataOciOperatorAccessControlAccessRequestAuditLogReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



