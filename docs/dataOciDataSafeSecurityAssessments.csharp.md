# `dataOciDataSafeSecurityAssessments` Submodule <a name="`dataOciDataSafeSecurityAssessments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityAssessments <a name="DataOciDataSafeSecurityAssessments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments oci_data_safe_security_assessments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessments(Construct Scope, string Id, DataOciDataSafeSecurityAssessmentsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig">DataOciDataSafeSecurityAssessmentsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig">DataOciDataSafeSecurityAssessmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetIsBaseline">ResetIsBaseline</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetIsScheduleAssessment">ResetIsScheduleAssessment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetScheduleAssessmentId">ResetScheduleAssessmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTargetId">ResetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTimeCreatedGreaterThanOrEqualTo">ResetTimeCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTimeCreatedLessThan">ResetTimeCreatedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTriggeredBy">ResetTriggeredBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetAccessLevel"></a>

```csharp
private void ResetAccessLevel()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetCompartmentIdInSubtree"></a>

```csharp
private void ResetCompartmentIdInSubtree()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsBaseline` <a name="ResetIsBaseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetIsBaseline"></a>

```csharp
private void ResetIsBaseline()
```

##### `ResetIsScheduleAssessment` <a name="ResetIsScheduleAssessment" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetIsScheduleAssessment"></a>

```csharp
private void ResetIsScheduleAssessment()
```

##### `ResetScheduleAssessmentId` <a name="ResetScheduleAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetScheduleAssessmentId"></a>

```csharp
private void ResetScheduleAssessmentId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTargetId"></a>

```csharp
private void ResetTargetId()
```

##### `ResetTimeCreatedGreaterThanOrEqualTo` <a name="ResetTimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTimeCreatedGreaterThanOrEqualTo"></a>

```csharp
private void ResetTimeCreatedGreaterThanOrEqualTo()
```

##### `ResetTimeCreatedLessThan` <a name="ResetTimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTimeCreatedLessThan"></a>

```csharp
private void ResetTimeCreatedLessThan()
```

##### `ResetTriggeredBy` <a name="ResetTriggeredBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTriggeredBy"></a>

```csharp
private void ResetTriggeredBy()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityAssessments resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSecurityAssessments.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSecurityAssessments.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSecurityAssessments.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSecurityAssessments.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeSecurityAssessments resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSecurityAssessments to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSecurityAssessments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityAssessments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList">DataOciDataSafeSecurityAssessmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.securityAssessments">SecurityAssessments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.accessLevelInput">AccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isBaselineInput">IsBaselineInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isScheduleAssessmentInput">IsScheduleAssessmentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.scheduleAssessmentIdInput">ScheduleAssessmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.targetIdInput">TargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedGreaterThanOrEqualToInput">TimeCreatedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedLessThanInput">TimeCreatedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.triggeredByInput">TriggeredByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.accessLevel">AccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isBaseline">IsBaseline</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isScheduleAssessment">IsScheduleAssessment</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.scheduleAssessmentId">ScheduleAssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedGreaterThanOrEqualTo">TimeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedLessThan">TimeCreatedLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.triggeredBy">TriggeredBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.filter"></a>

```csharp
public DataOciDataSafeSecurityAssessmentsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList">DataOciDataSafeSecurityAssessmentsFilterList</a>

---

##### `SecurityAssessments`<sup>Required</sup> <a name="SecurityAssessments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.securityAssessments"></a>

```csharp
public DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList SecurityAssessments { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.accessLevelInput"></a>

```csharp
public string AccessLevelInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentIdInSubtreeInput"></a>

```csharp
public object CompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsBaselineInput`<sup>Optional</sup> <a name="IsBaselineInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isBaselineInput"></a>

```csharp
public object IsBaselineInput { get; }
```

- *Type:* object

---

##### `IsScheduleAssessmentInput`<sup>Optional</sup> <a name="IsScheduleAssessmentInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isScheduleAssessmentInput"></a>

```csharp
public object IsScheduleAssessmentInput { get; }
```

- *Type:* object

---

##### `ScheduleAssessmentIdInput`<sup>Optional</sup> <a name="ScheduleAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.scheduleAssessmentIdInput"></a>

```csharp
public string ScheduleAssessmentIdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.targetIdInput"></a>

```csharp
public string TargetIdInput { get; }
```

- *Type:* string

---

##### `TimeCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedGreaterThanOrEqualToInput"></a>

```csharp
public string TimeCreatedGreaterThanOrEqualToInput { get; }
```

- *Type:* string

---

##### `TimeCreatedLessThanInput`<sup>Optional</sup> <a name="TimeCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedLessThanInput"></a>

```csharp
public string TimeCreatedLessThanInput { get; }
```

- *Type:* string

---

##### `TriggeredByInput`<sup>Optional</sup> <a name="TriggeredByInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.triggeredByInput"></a>

```csharp
public string TriggeredByInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.accessLevel"></a>

```csharp
public string AccessLevel { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsBaseline`<sup>Required</sup> <a name="IsBaseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isBaseline"></a>

```csharp
public object IsBaseline { get; }
```

- *Type:* object

---

##### `IsScheduleAssessment`<sup>Required</sup> <a name="IsScheduleAssessment" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isScheduleAssessment"></a>

```csharp
public object IsScheduleAssessment { get; }
```

- *Type:* object

---

##### `ScheduleAssessmentId`<sup>Required</sup> <a name="ScheduleAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.scheduleAssessmentId"></a>

```csharp
public string ScheduleAssessmentId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `TimeCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedGreaterThanOrEqualTo"></a>

```csharp
public string TimeCreatedGreaterThanOrEqualTo { get; }
```

- *Type:* string

---

##### `TimeCreatedLessThan`<sup>Required</sup> <a name="TimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedLessThan"></a>

```csharp
public string TimeCreatedLessThan { get; }
```

- *Type:* string

---

##### `TriggeredBy`<sup>Required</sup> <a name="TriggeredBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.triggeredBy"></a>

```csharp
public string TriggeredBy { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityAssessmentsConfig <a name="DataOciDataSafeSecurityAssessmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string AccessLevel = null,
    object CompartmentIdInSubtree = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    object IsBaseline = null,
    object IsScheduleAssessment = null,
    string ScheduleAssessmentId = null,
    string State = null,
    string TargetId = null,
    string TimeCreatedGreaterThanOrEqualTo = null,
    string TimeCreatedLessThan = null,
    string TriggeredBy = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#compartment_id DataOciDataSafeSecurityAssessments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.accessLevel">AccessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#access_level DataOciDataSafeSecurityAssessments#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#compartment_id_in_subtree DataOciDataSafeSecurityAssessments#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#display_name DataOciDataSafeSecurityAssessments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#id DataOciDataSafeSecurityAssessments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.isBaseline">IsBaseline</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#is_baseline DataOciDataSafeSecurityAssessments#is_baseline}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.isScheduleAssessment">IsScheduleAssessment</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#is_schedule_assessment DataOciDataSafeSecurityAssessments#is_schedule_assessment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.scheduleAssessmentId">ScheduleAssessmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#schedule_assessment_id DataOciDataSafeSecurityAssessments#schedule_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#state DataOciDataSafeSecurityAssessments#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.targetId">TargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#target_id DataOciDataSafeSecurityAssessments#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.timeCreatedGreaterThanOrEqualTo">TimeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#time_created_greater_than_or_equal_to DataOciDataSafeSecurityAssessments#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.timeCreatedLessThan">TimeCreatedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#time_created_less_than DataOciDataSafeSecurityAssessments#time_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.triggeredBy">TriggeredBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#triggered_by DataOciDataSafeSecurityAssessments#triggered_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#type DataOciDataSafeSecurityAssessments#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#compartment_id DataOciDataSafeSecurityAssessments#compartment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.accessLevel"></a>

```csharp
public string AccessLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#access_level DataOciDataSafeSecurityAssessments#access_level}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#compartment_id_in_subtree DataOciDataSafeSecurityAssessments#compartment_id_in_subtree}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#display_name DataOciDataSafeSecurityAssessments#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#filter DataOciDataSafeSecurityAssessments#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#id DataOciDataSafeSecurityAssessments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsBaseline`<sup>Optional</sup> <a name="IsBaseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.isBaseline"></a>

```csharp
public object IsBaseline { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#is_baseline DataOciDataSafeSecurityAssessments#is_baseline}.

---

##### `IsScheduleAssessment`<sup>Optional</sup> <a name="IsScheduleAssessment" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.isScheduleAssessment"></a>

```csharp
public object IsScheduleAssessment { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#is_schedule_assessment DataOciDataSafeSecurityAssessments#is_schedule_assessment}.

---

##### `ScheduleAssessmentId`<sup>Optional</sup> <a name="ScheduleAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.scheduleAssessmentId"></a>

```csharp
public string ScheduleAssessmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#schedule_assessment_id DataOciDataSafeSecurityAssessments#schedule_assessment_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#state DataOciDataSafeSecurityAssessments#state}.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.targetId"></a>

```csharp
public string TargetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#target_id DataOciDataSafeSecurityAssessments#target_id}.

---

##### `TimeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```csharp
public string TimeCreatedGreaterThanOrEqualTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#time_created_greater_than_or_equal_to DataOciDataSafeSecurityAssessments#time_created_greater_than_or_equal_to}.

---

##### `TimeCreatedLessThan`<sup>Optional</sup> <a name="TimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.timeCreatedLessThan"></a>

```csharp
public string TimeCreatedLessThan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#time_created_less_than DataOciDataSafeSecurityAssessments#time_created_less_than}.

---

##### `TriggeredBy`<sup>Optional</sup> <a name="TriggeredBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.triggeredBy"></a>

```csharp
public string TriggeredBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#triggered_by DataOciDataSafeSecurityAssessments#triggered_by}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#type DataOciDataSafeSecurityAssessments#type}.

---

### DataOciDataSafeSecurityAssessmentsFilter <a name="DataOciDataSafeSecurityAssessmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#name DataOciDataSafeSecurityAssessments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#values DataOciDataSafeSecurityAssessments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#regex DataOciDataSafeSecurityAssessments#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#name DataOciDataSafeSecurityAssessments#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#values DataOciDataSafeSecurityAssessments#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#regex DataOciDataSafeSecurityAssessments#regex}.

---

### DataOciDataSafeSecurityAssessmentsSecurityAssessments <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsSecurityAssessments {

};
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics {

};
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory {

};
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred {

};
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate {

};
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk {

};
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk {

};
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk {

};
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityAssessmentsFilterList <a name="DataOciDataSafeSecurityAssessmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.get"></a>

```csharp
private DataOciDataSafeSecurityAssessmentsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeSecurityAssessmentsFilterOutputReference <a name="DataOciDataSafeSecurityAssessmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.get"></a>

```csharp
private DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.ignoredAssessmentIds">IgnoredAssessmentIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.ignoredTargets">IgnoredTargets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.isAssessmentScheduled">IsAssessmentScheduled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.isBaseline">IsBaseline</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.isDeviatedFromBaseline">IsDeviatedFromBaseline</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.lastComparedBaselineId">LastComparedBaselineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.link">Link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.schedule">Schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.scheduleSecurityAssessmentId">ScheduleSecurityAssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.statistics">Statistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.targetIds">TargetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.targetVersion">TargetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.timeLastAssessed">TimeLastAssessed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.triggeredBy">TriggeredBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessments">DataOciDataSafeSecurityAssessmentsSecurityAssessments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoredAssessmentIds`<sup>Required</sup> <a name="IgnoredAssessmentIds" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.ignoredAssessmentIds"></a>

```csharp
public string[] IgnoredAssessmentIds { get; }
```

- *Type:* string[]

---

##### `IgnoredTargets`<sup>Required</sup> <a name="IgnoredTargets" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.ignoredTargets"></a>

```csharp
public string[] IgnoredTargets { get; }
```

- *Type:* string[]

---

##### `IsAssessmentScheduled`<sup>Required</sup> <a name="IsAssessmentScheduled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.isAssessmentScheduled"></a>

```csharp
public IResolvable IsAssessmentScheduled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsBaseline`<sup>Required</sup> <a name="IsBaseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.isBaseline"></a>

```csharp
public IResolvable IsBaseline { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsDeviatedFromBaseline`<sup>Required</sup> <a name="IsDeviatedFromBaseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.isDeviatedFromBaseline"></a>

```csharp
public IResolvable IsDeviatedFromBaseline { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LastComparedBaselineId`<sup>Required</sup> <a name="LastComparedBaselineId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.lastComparedBaselineId"></a>

```csharp
public string LastComparedBaselineId { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Link`<sup>Required</sup> <a name="Link" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.link"></a>

```csharp
public string Link { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.schedule"></a>

```csharp
public string Schedule { get; }
```

- *Type:* string

---

##### `ScheduleSecurityAssessmentId`<sup>Required</sup> <a name="ScheduleSecurityAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.scheduleSecurityAssessmentId"></a>

```csharp
public string ScheduleSecurityAssessmentId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Statistics`<sup>Required</sup> <a name="Statistics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.statistics"></a>

```csharp
public DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList Statistics { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList</a>

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `TargetIds`<sup>Required</sup> <a name="TargetIds" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.targetIds"></a>

```csharp
public string[] TargetIds { get; }
```

- *Type:* string[]

---

##### `TargetVersion`<sup>Required</sup> <a name="TargetVersion" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.targetVersion"></a>

```csharp
public string TargetVersion { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeLastAssessed`<sup>Required</sup> <a name="TimeLastAssessed" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.timeLastAssessed"></a>

```csharp
public string TimeLastAssessed { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `TriggeredBy`<sup>Required</sup> <a name="TriggeredBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.triggeredBy"></a>

```csharp
public string TriggeredBy { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSecurityAssessmentsSecurityAssessments InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessments">DataOciDataSafeSecurityAssessmentsSecurityAssessments</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.get"></a>

```csharp
private DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.auditingFindingsCount">AuditingFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.authorizationControlFindingsCount">AuthorizationControlFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.dataEncryptionFindingsCount">DataEncryptionFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.dbConfigurationFindingsCount">DbConfigurationFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.fineGrainedAccessControlFindingsCount">FineGrainedAccessControlFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.privilegesAndRolesFindingsCount">PrivilegesAndRolesFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.targetsCount">TargetsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.userAccountsFindingsCount">UserAccountsFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuditingFindingsCount`<sup>Required</sup> <a name="AuditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.auditingFindingsCount"></a>

```csharp
public double AuditingFindingsCount { get; }
```

- *Type:* double

---

##### `AuthorizationControlFindingsCount`<sup>Required</sup> <a name="AuthorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.authorizationControlFindingsCount"></a>

```csharp
public double AuthorizationControlFindingsCount { get; }
```

- *Type:* double

---

##### `DataEncryptionFindingsCount`<sup>Required</sup> <a name="DataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.dataEncryptionFindingsCount"></a>

```csharp
public double DataEncryptionFindingsCount { get; }
```

- *Type:* double

---

##### `DbConfigurationFindingsCount`<sup>Required</sup> <a name="DbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.dbConfigurationFindingsCount"></a>

```csharp
public double DbConfigurationFindingsCount { get; }
```

- *Type:* double

---

##### `FineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="FineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```csharp
public double FineGrainedAccessControlFindingsCount { get; }
```

- *Type:* double

---

##### `PrivilegesAndRolesFindingsCount`<sup>Required</sup> <a name="PrivilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.privilegesAndRolesFindingsCount"></a>

```csharp
public double PrivilegesAndRolesFindingsCount { get; }
```

- *Type:* double

---

##### `TargetsCount`<sup>Required</sup> <a name="TargetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.targetsCount"></a>

```csharp
public double TargetsCount { get; }
```

- *Type:* double

---

##### `UserAccountsFindingsCount`<sup>Required</sup> <a name="UserAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.userAccountsFindingsCount"></a>

```csharp
public double UserAccountsFindingsCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.get"></a>

```csharp
private DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.auditingFindingsCount">AuditingFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.authorizationControlFindingsCount">AuthorizationControlFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.dataEncryptionFindingsCount">DataEncryptionFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.dbConfigurationFindingsCount">DbConfigurationFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.fineGrainedAccessControlFindingsCount">FineGrainedAccessControlFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.privilegesAndRolesFindingsCount">PrivilegesAndRolesFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.targetsCount">TargetsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.userAccountsFindingsCount">UserAccountsFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuditingFindingsCount`<sup>Required</sup> <a name="AuditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.auditingFindingsCount"></a>

```csharp
public double AuditingFindingsCount { get; }
```

- *Type:* double

---

##### `AuthorizationControlFindingsCount`<sup>Required</sup> <a name="AuthorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.authorizationControlFindingsCount"></a>

```csharp
public double AuthorizationControlFindingsCount { get; }
```

- *Type:* double

---

##### `DataEncryptionFindingsCount`<sup>Required</sup> <a name="DataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.dataEncryptionFindingsCount"></a>

```csharp
public double DataEncryptionFindingsCount { get; }
```

- *Type:* double

---

##### `DbConfigurationFindingsCount`<sup>Required</sup> <a name="DbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.dbConfigurationFindingsCount"></a>

```csharp
public double DbConfigurationFindingsCount { get; }
```

- *Type:* double

---

##### `FineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="FineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```csharp
public double FineGrainedAccessControlFindingsCount { get; }
```

- *Type:* double

---

##### `PrivilegesAndRolesFindingsCount`<sup>Required</sup> <a name="PrivilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.privilegesAndRolesFindingsCount"></a>

```csharp
public double PrivilegesAndRolesFindingsCount { get; }
```

- *Type:* double

---

##### `TargetsCount`<sup>Required</sup> <a name="TargetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.targetsCount"></a>

```csharp
public double TargetsCount { get; }
```

- *Type:* double

---

##### `UserAccountsFindingsCount`<sup>Required</sup> <a name="UserAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.userAccountsFindingsCount"></a>

```csharp
public double UserAccountsFindingsCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.get"></a>

```csharp
private DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.auditingFindingsCount">AuditingFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.authorizationControlFindingsCount">AuthorizationControlFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.dataEncryptionFindingsCount">DataEncryptionFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.dbConfigurationFindingsCount">DbConfigurationFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.fineGrainedAccessControlFindingsCount">FineGrainedAccessControlFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.privilegesAndRolesFindingsCount">PrivilegesAndRolesFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.targetsCount">TargetsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.userAccountsFindingsCount">UserAccountsFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuditingFindingsCount`<sup>Required</sup> <a name="AuditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.auditingFindingsCount"></a>

```csharp
public double AuditingFindingsCount { get; }
```

- *Type:* double

---

##### `AuthorizationControlFindingsCount`<sup>Required</sup> <a name="AuthorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.authorizationControlFindingsCount"></a>

```csharp
public double AuthorizationControlFindingsCount { get; }
```

- *Type:* double

---

##### `DataEncryptionFindingsCount`<sup>Required</sup> <a name="DataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.dataEncryptionFindingsCount"></a>

```csharp
public double DataEncryptionFindingsCount { get; }
```

- *Type:* double

---

##### `DbConfigurationFindingsCount`<sup>Required</sup> <a name="DbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.dbConfigurationFindingsCount"></a>

```csharp
public double DbConfigurationFindingsCount { get; }
```

- *Type:* double

---

##### `FineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="FineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```csharp
public double FineGrainedAccessControlFindingsCount { get; }
```

- *Type:* double

---

##### `PrivilegesAndRolesFindingsCount`<sup>Required</sup> <a name="PrivilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.privilegesAndRolesFindingsCount"></a>

```csharp
public double PrivilegesAndRolesFindingsCount { get; }
```

- *Type:* double

---

##### `TargetsCount`<sup>Required</sup> <a name="TargetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.targetsCount"></a>

```csharp
public double TargetsCount { get; }
```

- *Type:* double

---

##### `UserAccountsFindingsCount`<sup>Required</sup> <a name="UserAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.userAccountsFindingsCount"></a>

```csharp
public double UserAccountsFindingsCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.get"></a>

```csharp
private DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.auditingFindingsCount">AuditingFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.authorizationControlFindingsCount">AuthorizationControlFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.dataEncryptionFindingsCount">DataEncryptionFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.dbConfigurationFindingsCount">DbConfigurationFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.fineGrainedAccessControlFindingsCount">FineGrainedAccessControlFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.privilegesAndRolesFindingsCount">PrivilegesAndRolesFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.targetsCount">TargetsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.userAccountsFindingsCount">UserAccountsFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuditingFindingsCount`<sup>Required</sup> <a name="AuditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.auditingFindingsCount"></a>

```csharp
public double AuditingFindingsCount { get; }
```

- *Type:* double

---

##### `AuthorizationControlFindingsCount`<sup>Required</sup> <a name="AuthorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.authorizationControlFindingsCount"></a>

```csharp
public double AuthorizationControlFindingsCount { get; }
```

- *Type:* double

---

##### `DataEncryptionFindingsCount`<sup>Required</sup> <a name="DataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.dataEncryptionFindingsCount"></a>

```csharp
public double DataEncryptionFindingsCount { get; }
```

- *Type:* double

---

##### `DbConfigurationFindingsCount`<sup>Required</sup> <a name="DbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.dbConfigurationFindingsCount"></a>

```csharp
public double DbConfigurationFindingsCount { get; }
```

- *Type:* double

---

##### `FineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="FineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```csharp
public double FineGrainedAccessControlFindingsCount { get; }
```

- *Type:* double

---

##### `PrivilegesAndRolesFindingsCount`<sup>Required</sup> <a name="PrivilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.privilegesAndRolesFindingsCount"></a>

```csharp
public double PrivilegesAndRolesFindingsCount { get; }
```

- *Type:* double

---

##### `TargetsCount`<sup>Required</sup> <a name="TargetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.targetsCount"></a>

```csharp
public double TargetsCount { get; }
```

- *Type:* double

---

##### `UserAccountsFindingsCount`<sup>Required</sup> <a name="UserAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.userAccountsFindingsCount"></a>

```csharp
public double UserAccountsFindingsCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.get"></a>

```csharp
private DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.get"></a>

```csharp
private DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.auditingFindingsCount">AuditingFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.authorizationControlFindingsCount">AuthorizationControlFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.dataEncryptionFindingsCount">DataEncryptionFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.dbConfigurationFindingsCount">DbConfigurationFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.fineGrainedAccessControlFindingsCount">FineGrainedAccessControlFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.privilegesAndRolesFindingsCount">PrivilegesAndRolesFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.targetsCount">TargetsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.userAccountsFindingsCount">UserAccountsFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuditingFindingsCount`<sup>Required</sup> <a name="AuditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.auditingFindingsCount"></a>

```csharp
public double AuditingFindingsCount { get; }
```

- *Type:* double

---

##### `AuthorizationControlFindingsCount`<sup>Required</sup> <a name="AuthorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.authorizationControlFindingsCount"></a>

```csharp
public double AuthorizationControlFindingsCount { get; }
```

- *Type:* double

---

##### `DataEncryptionFindingsCount`<sup>Required</sup> <a name="DataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.dataEncryptionFindingsCount"></a>

```csharp
public double DataEncryptionFindingsCount { get; }
```

- *Type:* double

---

##### `DbConfigurationFindingsCount`<sup>Required</sup> <a name="DbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.dbConfigurationFindingsCount"></a>

```csharp
public double DbConfigurationFindingsCount { get; }
```

- *Type:* double

---

##### `FineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="FineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```csharp
public double FineGrainedAccessControlFindingsCount { get; }
```

- *Type:* double

---

##### `PrivilegesAndRolesFindingsCount`<sup>Required</sup> <a name="PrivilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.privilegesAndRolesFindingsCount"></a>

```csharp
public double PrivilegesAndRolesFindingsCount { get; }
```

- *Type:* double

---

##### `TargetsCount`<sup>Required</sup> <a name="TargetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.targetsCount"></a>

```csharp
public double TargetsCount { get; }
```

- *Type:* double

---

##### `UserAccountsFindingsCount`<sup>Required</sup> <a name="UserAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.userAccountsFindingsCount"></a>

```csharp
public double UserAccountsFindingsCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.get"></a>

```csharp
private DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.auditingFindingsCount">AuditingFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.authorizationControlFindingsCount">AuthorizationControlFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.dataEncryptionFindingsCount">DataEncryptionFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.dbConfigurationFindingsCount">DbConfigurationFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.fineGrainedAccessControlFindingsCount">FineGrainedAccessControlFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.privilegesAndRolesFindingsCount">PrivilegesAndRolesFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.targetsCount">TargetsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.userAccountsFindingsCount">UserAccountsFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuditingFindingsCount`<sup>Required</sup> <a name="AuditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.auditingFindingsCount"></a>

```csharp
public double AuditingFindingsCount { get; }
```

- *Type:* double

---

##### `AuthorizationControlFindingsCount`<sup>Required</sup> <a name="AuthorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.authorizationControlFindingsCount"></a>

```csharp
public double AuthorizationControlFindingsCount { get; }
```

- *Type:* double

---

##### `DataEncryptionFindingsCount`<sup>Required</sup> <a name="DataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.dataEncryptionFindingsCount"></a>

```csharp
public double DataEncryptionFindingsCount { get; }
```

- *Type:* double

---

##### `DbConfigurationFindingsCount`<sup>Required</sup> <a name="DbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.dbConfigurationFindingsCount"></a>

```csharp
public double DbConfigurationFindingsCount { get; }
```

- *Type:* double

---

##### `FineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="FineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```csharp
public double FineGrainedAccessControlFindingsCount { get; }
```

- *Type:* double

---

##### `PrivilegesAndRolesFindingsCount`<sup>Required</sup> <a name="PrivilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.privilegesAndRolesFindingsCount"></a>

```csharp
public double PrivilegesAndRolesFindingsCount { get; }
```

- *Type:* double

---

##### `TargetsCount`<sup>Required</sup> <a name="TargetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.targetsCount"></a>

```csharp
public double TargetsCount { get; }
```

- *Type:* double

---

##### `UserAccountsFindingsCount`<sup>Required</sup> <a name="UserAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.userAccountsFindingsCount"></a>

```csharp
public double UserAccountsFindingsCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.advisory">Advisory</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.deferred">Deferred</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.evaluate">Evaluate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.highRisk">HighRisk</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.lowRisk">LowRisk</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.mediumRisk">MediumRisk</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.pass">Pass</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.targetsCount">TargetsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Advisory`<sup>Required</sup> <a name="Advisory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.advisory"></a>

```csharp
public DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList Advisory { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList</a>

---

##### `Deferred`<sup>Required</sup> <a name="Deferred" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.deferred"></a>

```csharp
public DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList Deferred { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList</a>

---

##### `Evaluate`<sup>Required</sup> <a name="Evaluate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.evaluate"></a>

```csharp
public DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList Evaluate { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList</a>

---

##### `HighRisk`<sup>Required</sup> <a name="HighRisk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.highRisk"></a>

```csharp
public DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList HighRisk { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList</a>

---

##### `LowRisk`<sup>Required</sup> <a name="LowRisk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.lowRisk"></a>

```csharp
public DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList LowRisk { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList</a>

---

##### `MediumRisk`<sup>Required</sup> <a name="MediumRisk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.mediumRisk"></a>

```csharp
public DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList MediumRisk { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList</a>

---

##### `Pass`<sup>Required</sup> <a name="Pass" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.pass"></a>

```csharp
public DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList Pass { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList</a>

---

##### `TargetsCount`<sup>Required</sup> <a name="TargetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.targetsCount"></a>

```csharp
public double TargetsCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.get"></a>

```csharp
private DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.auditingFindingsCount">AuditingFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.authorizationControlFindingsCount">AuthorizationControlFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.dataEncryptionFindingsCount">DataEncryptionFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.dbConfigurationFindingsCount">DbConfigurationFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.fineGrainedAccessControlFindingsCount">FineGrainedAccessControlFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.privilegesAndRolesFindingsCount">PrivilegesAndRolesFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.targetsCount">TargetsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.userAccountsFindingsCount">UserAccountsFindingsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuditingFindingsCount`<sup>Required</sup> <a name="AuditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.auditingFindingsCount"></a>

```csharp
public double AuditingFindingsCount { get; }
```

- *Type:* double

---

##### `AuthorizationControlFindingsCount`<sup>Required</sup> <a name="AuthorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.authorizationControlFindingsCount"></a>

```csharp
public double AuthorizationControlFindingsCount { get; }
```

- *Type:* double

---

##### `DataEncryptionFindingsCount`<sup>Required</sup> <a name="DataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.dataEncryptionFindingsCount"></a>

```csharp
public double DataEncryptionFindingsCount { get; }
```

- *Type:* double

---

##### `DbConfigurationFindingsCount`<sup>Required</sup> <a name="DbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.dbConfigurationFindingsCount"></a>

```csharp
public double DbConfigurationFindingsCount { get; }
```

- *Type:* double

---

##### `FineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="FineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```csharp
public double FineGrainedAccessControlFindingsCount { get; }
```

- *Type:* double

---

##### `PrivilegesAndRolesFindingsCount`<sup>Required</sup> <a name="PrivilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.privilegesAndRolesFindingsCount"></a>

```csharp
public double PrivilegesAndRolesFindingsCount { get; }
```

- *Type:* double

---

##### `TargetsCount`<sup>Required</sup> <a name="TargetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.targetsCount"></a>

```csharp
public double TargetsCount { get; }
```

- *Type:* double

---

##### `UserAccountsFindingsCount`<sup>Required</sup> <a name="UserAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.userAccountsFindingsCount"></a>

```csharp
public double UserAccountsFindingsCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass</a>

---



