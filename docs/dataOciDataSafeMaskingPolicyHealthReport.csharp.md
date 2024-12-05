# `dataOciDataSafeMaskingPolicyHealthReport` Submodule <a name="`dataOciDataSafeMaskingPolicyHealthReport` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeMaskingPolicyHealthReport <a name="DataOciDataSafeMaskingPolicyHealthReport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report oci_data_safe_masking_policy_health_report}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeMaskingPolicyHealthReport(Construct Scope, string Id, DataOciDataSafeMaskingPolicyHealthReportConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReportConfig">DataOciDataSafeMaskingPolicyHealthReportConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReportConfig">DataOciDataSafeMaskingPolicyHealthReportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeMaskingPolicyHealthReport resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeMaskingPolicyHealthReport.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeMaskingPolicyHealthReport.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeMaskingPolicyHealthReport.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeMaskingPolicyHealthReport.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeMaskingPolicyHealthReport resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeMaskingPolicyHealthReport to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeMaskingPolicyHealthReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeMaskingPolicyHealthReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.maskingPolicyId">MaskingPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.maskingPolicyHealthReportIdInput">MaskingPolicyHealthReportIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.maskingPolicyHealthReportId">MaskingPolicyHealthReportId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `MaskingPolicyId`<sup>Required</sup> <a name="MaskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.maskingPolicyId"></a>

```csharp
public string MaskingPolicyId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaskingPolicyHealthReportIdInput`<sup>Optional</sup> <a name="MaskingPolicyHealthReportIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.maskingPolicyHealthReportIdInput"></a>

```csharp
public string MaskingPolicyHealthReportIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaskingPolicyHealthReportId`<sup>Required</sup> <a name="MaskingPolicyHealthReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.maskingPolicyHealthReportId"></a>

```csharp
public string MaskingPolicyHealthReportId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReport.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeMaskingPolicyHealthReportConfig <a name="DataOciDataSafeMaskingPolicyHealthReportConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReportConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeMaskingPolicyHealthReportConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string MaskingPolicyHealthReportId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReportConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReportConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReportConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReportConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReportConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReportConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReportConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReportConfig.property.maskingPolicyHealthReportId">MaskingPolicyHealthReportId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report#masking_policy_health_report_id DataOciDataSafeMaskingPolicyHealthReport#masking_policy_health_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReportConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report#id DataOciDataSafeMaskingPolicyHealthReport#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReportConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReportConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReportConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReportConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReportConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReportConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReportConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MaskingPolicyHealthReportId`<sup>Required</sup> <a name="MaskingPolicyHealthReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReportConfig.property.maskingPolicyHealthReportId"></a>

```csharp
public string MaskingPolicyHealthReportId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report#masking_policy_health_report_id DataOciDataSafeMaskingPolicyHealthReport#masking_policy_health_report_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReport.DataOciDataSafeMaskingPolicyHealthReportConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report#id DataOciDataSafeMaskingPolicyHealthReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



