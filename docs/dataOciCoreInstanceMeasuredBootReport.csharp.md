# `dataOciCoreInstanceMeasuredBootReport` Submodule <a name="`dataOciCoreInstanceMeasuredBootReport` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreInstanceMeasuredBootReport <a name="DataOciCoreInstanceMeasuredBootReport" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_measured_boot_report oci_core_instance_measured_boot_report}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreInstanceMeasuredBootReport(Construct Scope, string Id, DataOciCoreInstanceMeasuredBootReportConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig">DataOciCoreInstanceMeasuredBootReportConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig">DataOciCoreInstanceMeasuredBootReportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreInstanceMeasuredBootReport resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreInstanceMeasuredBootReport.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreInstanceMeasuredBootReport.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreInstanceMeasuredBootReport.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreInstanceMeasuredBootReport.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCoreInstanceMeasuredBootReport resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreInstanceMeasuredBootReport to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreInstanceMeasuredBootReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_measured_boot_report#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreInstanceMeasuredBootReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.isPolicyVerificationSuccessful">IsPolicyVerificationSuccessful</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.measurements">Measurements</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList">DataOciCoreInstanceMeasuredBootReportMeasurementsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `IsPolicyVerificationSuccessful`<sup>Required</sup> <a name="IsPolicyVerificationSuccessful" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.isPolicyVerificationSuccessful"></a>

```csharp
public IResolvable IsPolicyVerificationSuccessful { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Measurements`<sup>Required</sup> <a name="Measurements" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.measurements"></a>

```csharp
public DataOciCoreInstanceMeasuredBootReportMeasurementsList Measurements { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList">DataOciCoreInstanceMeasuredBootReportMeasurementsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreInstanceMeasuredBootReportConfig <a name="DataOciCoreInstanceMeasuredBootReportConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreInstanceMeasuredBootReportConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string InstanceId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_measured_boot_report#instance_id DataOciCoreInstanceMeasuredBootReport#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_measured_boot_report#id DataOciCoreInstanceMeasuredBootReport#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_measured_boot_report#instance_id DataOciCoreInstanceMeasuredBootReport#instance_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_measured_boot_report#id DataOciCoreInstanceMeasuredBootReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreInstanceMeasuredBootReportMeasurements <a name="DataOciCoreInstanceMeasuredBootReportMeasurements" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurements"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurements.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreInstanceMeasuredBootReportMeasurements {

};
```


### DataOciCoreInstanceMeasuredBootReportMeasurementsActual <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsActual" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActual"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActual.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreInstanceMeasuredBootReportMeasurementsActual {

};
```


### DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreInstanceMeasuredBootReportMeasurementsActualList <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsActualList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreInstanceMeasuredBootReportMeasurementsActualList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.get"></a>

```csharp
private DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.hashAlgorithm">HashAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.pcrIndex">PcrIndex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActual">DataOciCoreInstanceMeasuredBootReportMeasurementsActual</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HashAlgorithm`<sup>Required</sup> <a name="HashAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.hashAlgorithm"></a>

```csharp
public string HashAlgorithm { get; }
```

- *Type:* string

---

##### `PcrIndex`<sup>Required</sup> <a name="PcrIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.pcrIndex"></a>

```csharp
public string PcrIndex { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreInstanceMeasuredBootReportMeasurementsActual InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActual">DataOciCoreInstanceMeasuredBootReportMeasurementsActual</a>

---


### DataOciCoreInstanceMeasuredBootReportMeasurementsList <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreInstanceMeasuredBootReportMeasurementsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.get"></a>

```csharp
private DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.actual">Actual</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList">DataOciCoreInstanceMeasuredBootReportMeasurementsActualList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.policy">Policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList">DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurements">DataOciCoreInstanceMeasuredBootReportMeasurements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Actual`<sup>Required</sup> <a name="Actual" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.actual"></a>

```csharp
public DataOciCoreInstanceMeasuredBootReportMeasurementsActualList Actual { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList">DataOciCoreInstanceMeasuredBootReportMeasurementsActualList</a>

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.policy"></a>

```csharp
public DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList Policy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList">DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreInstanceMeasuredBootReportMeasurements InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurements">DataOciCoreInstanceMeasuredBootReportMeasurements</a>

---


### DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.get"></a>

```csharp
private DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.hashAlgorithm">HashAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.pcrIndex">PcrIndex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy">DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HashAlgorithm`<sup>Required</sup> <a name="HashAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.hashAlgorithm"></a>

```csharp
public string HashAlgorithm { get; }
```

- *Type:* string

---

##### `PcrIndex`<sup>Required</sup> <a name="PcrIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.pcrIndex"></a>

```csharp
public string PcrIndex { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy">DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy</a>

---



