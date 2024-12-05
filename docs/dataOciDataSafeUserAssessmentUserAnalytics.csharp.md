# `dataOciDataSafeUserAssessmentUserAnalytics` Submodule <a name="`dataOciDataSafeUserAssessmentUserAnalytics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeUserAssessmentUserAnalytics <a name="DataOciDataSafeUserAssessmentUserAnalytics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics oci_data_safe_user_assessment_user_analytics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentUserAnalytics(Construct Scope, string Id, DataOciDataSafeUserAssessmentUserAnalyticsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig">DataOciDataSafeUserAssessmentUserAnalyticsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig">DataOciDataSafeUserAssessmentUserAnalyticsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetAccountStatus">ResetAccountStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetAuthenticationType">ResetAuthenticationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTargetId">ResetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimeLastLoginGreaterThanOrEqualTo">ResetTimeLastLoginGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimeLastLoginLessThan">ResetTimeLastLoginLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimePasswordLastChangedGreaterThanOrEqualTo">ResetTimePasswordLastChangedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimePasswordLastChangedLessThan">ResetTimePasswordLastChangedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimeUserCreatedGreaterThanOrEqualTo">ResetTimeUserCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimeUserCreatedLessThan">ResetTimeUserCreatedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetUserCategory">ResetUserCategory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetUserKey">ResetUserKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetUserName">ResetUserName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetAccessLevel"></a>

```csharp
private void ResetAccessLevel()
```

##### `ResetAccountStatus` <a name="ResetAccountStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetAccountStatus"></a>

```csharp
private void ResetAccountStatus()
```

##### `ResetAuthenticationType` <a name="ResetAuthenticationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetAuthenticationType"></a>

```csharp
private void ResetAuthenticationType()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetCompartmentIdInSubtree"></a>

```csharp
private void ResetCompartmentIdInSubtree()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTargetId"></a>

```csharp
private void ResetTargetId()
```

##### `ResetTimeLastLoginGreaterThanOrEqualTo` <a name="ResetTimeLastLoginGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimeLastLoginGreaterThanOrEqualTo"></a>

```csharp
private void ResetTimeLastLoginGreaterThanOrEqualTo()
```

##### `ResetTimeLastLoginLessThan` <a name="ResetTimeLastLoginLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimeLastLoginLessThan"></a>

```csharp
private void ResetTimeLastLoginLessThan()
```

##### `ResetTimePasswordLastChangedGreaterThanOrEqualTo` <a name="ResetTimePasswordLastChangedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimePasswordLastChangedGreaterThanOrEqualTo"></a>

```csharp
private void ResetTimePasswordLastChangedGreaterThanOrEqualTo()
```

##### `ResetTimePasswordLastChangedLessThan` <a name="ResetTimePasswordLastChangedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimePasswordLastChangedLessThan"></a>

```csharp
private void ResetTimePasswordLastChangedLessThan()
```

##### `ResetTimeUserCreatedGreaterThanOrEqualTo` <a name="ResetTimeUserCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimeUserCreatedGreaterThanOrEqualTo"></a>

```csharp
private void ResetTimeUserCreatedGreaterThanOrEqualTo()
```

##### `ResetTimeUserCreatedLessThan` <a name="ResetTimeUserCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetTimeUserCreatedLessThan"></a>

```csharp
private void ResetTimeUserCreatedLessThan()
```

##### `ResetUserCategory` <a name="ResetUserCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetUserCategory"></a>

```csharp
private void ResetUserCategory()
```

##### `ResetUserKey` <a name="ResetUserKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetUserKey"></a>

```csharp
private void ResetUserKey()
```

##### `ResetUserName` <a name="ResetUserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.resetUserName"></a>

```csharp
private void ResetUserName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeUserAssessmentUserAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeUserAssessmentUserAnalytics.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeUserAssessmentUserAnalytics.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeUserAssessmentUserAnalytics.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeUserAssessmentUserAnalytics.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeUserAssessmentUserAnalytics resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeUserAssessmentUserAnalytics to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeUserAssessmentUserAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeUserAssessmentUserAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList">DataOciDataSafeUserAssessmentUserAnalyticsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userAggregations">UserAggregations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList">DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.accessLevelInput">AccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.accountStatusInput">AccountStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.targetIdInput">TargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeLastLoginGreaterThanOrEqualToInput">TimeLastLoginGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeLastLoginLessThanInput">TimeLastLoginLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timePasswordLastChangedGreaterThanOrEqualToInput">TimePasswordLastChangedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timePasswordLastChangedLessThanInput">TimePasswordLastChangedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeUserCreatedGreaterThanOrEqualToInput">TimeUserCreatedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeUserCreatedLessThanInput">TimeUserCreatedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userAssessmentIdInput">UserAssessmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userCategoryInput">UserCategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userKeyInput">UserKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.accessLevel">AccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.accountStatus">AccountStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeLastLoginGreaterThanOrEqualTo">TimeLastLoginGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeLastLoginLessThan">TimeLastLoginLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timePasswordLastChangedGreaterThanOrEqualTo">TimePasswordLastChangedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timePasswordLastChangedLessThan">TimePasswordLastChangedLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeUserCreatedGreaterThanOrEqualTo">TimeUserCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeUserCreatedLessThan">TimeUserCreatedLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userAssessmentId">UserAssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userCategory">UserCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userKey">UserKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userName">UserName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.filter"></a>

```csharp
public DataOciDataSafeUserAssessmentUserAnalyticsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList">DataOciDataSafeUserAssessmentUserAnalyticsFilterList</a>

---

##### `UserAggregations`<sup>Required</sup> <a name="UserAggregations" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userAggregations"></a>

```csharp
public DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList UserAggregations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList">DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.accessLevelInput"></a>

```csharp
public string AccessLevelInput { get; }
```

- *Type:* string

---

##### `AccountStatusInput`<sup>Optional</sup> <a name="AccountStatusInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.accountStatusInput"></a>

```csharp
public string AccountStatusInput { get; }
```

- *Type:* string

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.authenticationTypeInput"></a>

```csharp
public string AuthenticationTypeInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.compartmentIdInSubtreeInput"></a>

```csharp
public object CompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.targetIdInput"></a>

```csharp
public string TargetIdInput { get; }
```

- *Type:* string

---

##### `TimeLastLoginGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeLastLoginGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeLastLoginGreaterThanOrEqualToInput"></a>

```csharp
public string TimeLastLoginGreaterThanOrEqualToInput { get; }
```

- *Type:* string

---

##### `TimeLastLoginLessThanInput`<sup>Optional</sup> <a name="TimeLastLoginLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeLastLoginLessThanInput"></a>

```csharp
public string TimeLastLoginLessThanInput { get; }
```

- *Type:* string

---

##### `TimePasswordLastChangedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimePasswordLastChangedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timePasswordLastChangedGreaterThanOrEqualToInput"></a>

```csharp
public string TimePasswordLastChangedGreaterThanOrEqualToInput { get; }
```

- *Type:* string

---

##### `TimePasswordLastChangedLessThanInput`<sup>Optional</sup> <a name="TimePasswordLastChangedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timePasswordLastChangedLessThanInput"></a>

```csharp
public string TimePasswordLastChangedLessThanInput { get; }
```

- *Type:* string

---

##### `TimeUserCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeUserCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeUserCreatedGreaterThanOrEqualToInput"></a>

```csharp
public string TimeUserCreatedGreaterThanOrEqualToInput { get; }
```

- *Type:* string

---

##### `TimeUserCreatedLessThanInput`<sup>Optional</sup> <a name="TimeUserCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeUserCreatedLessThanInput"></a>

```csharp
public string TimeUserCreatedLessThanInput { get; }
```

- *Type:* string

---

##### `UserAssessmentIdInput`<sup>Optional</sup> <a name="UserAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userAssessmentIdInput"></a>

```csharp
public string UserAssessmentIdInput { get; }
```

- *Type:* string

---

##### `UserCategoryInput`<sup>Optional</sup> <a name="UserCategoryInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userCategoryInput"></a>

```csharp
public string UserCategoryInput { get; }
```

- *Type:* string

---

##### `UserKeyInput`<sup>Optional</sup> <a name="UserKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userKeyInput"></a>

```csharp
public string UserKeyInput { get; }
```

- *Type:* string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.accessLevel"></a>

```csharp
public string AccessLevel { get; }
```

- *Type:* string

---

##### `AccountStatus`<sup>Required</sup> <a name="AccountStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.accountStatus"></a>

```csharp
public string AccountStatus { get; }
```

- *Type:* string

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `TimeLastLoginGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeLastLoginGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeLastLoginGreaterThanOrEqualTo"></a>

```csharp
public string TimeLastLoginGreaterThanOrEqualTo { get; }
```

- *Type:* string

---

##### `TimeLastLoginLessThan`<sup>Required</sup> <a name="TimeLastLoginLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeLastLoginLessThan"></a>

```csharp
public string TimeLastLoginLessThan { get; }
```

- *Type:* string

---

##### `TimePasswordLastChangedGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimePasswordLastChangedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timePasswordLastChangedGreaterThanOrEqualTo"></a>

```csharp
public string TimePasswordLastChangedGreaterThanOrEqualTo { get; }
```

- *Type:* string

---

##### `TimePasswordLastChangedLessThan`<sup>Required</sup> <a name="TimePasswordLastChangedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timePasswordLastChangedLessThan"></a>

```csharp
public string TimePasswordLastChangedLessThan { get; }
```

- *Type:* string

---

##### `TimeUserCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeUserCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeUserCreatedGreaterThanOrEqualTo"></a>

```csharp
public string TimeUserCreatedGreaterThanOrEqualTo { get; }
```

- *Type:* string

---

##### `TimeUserCreatedLessThan`<sup>Required</sup> <a name="TimeUserCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.timeUserCreatedLessThan"></a>

```csharp
public string TimeUserCreatedLessThan { get; }
```

- *Type:* string

---

##### `UserAssessmentId`<sup>Required</sup> <a name="UserAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userAssessmentId"></a>

```csharp
public string UserAssessmentId { get; }
```

- *Type:* string

---

##### `UserCategory`<sup>Required</sup> <a name="UserCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userCategory"></a>

```csharp
public string UserCategory { get; }
```

- *Type:* string

---

##### `UserKey`<sup>Required</sup> <a name="UserKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userKey"></a>

```csharp
public string UserKey { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalytics.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeUserAssessmentUserAnalyticsConfig <a name="DataOciDataSafeUserAssessmentUserAnalyticsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentUserAnalyticsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string UserAssessmentId,
    string AccessLevel = null,
    string AccountStatus = null,
    string AuthenticationType = null,
    object CompartmentIdInSubtree = null,
    object Filter = null,
    string Id = null,
    string TargetId = null,
    string TimeLastLoginGreaterThanOrEqualTo = null,
    string TimeLastLoginLessThan = null,
    string TimePasswordLastChangedGreaterThanOrEqualTo = null,
    string TimePasswordLastChangedLessThan = null,
    string TimeUserCreatedGreaterThanOrEqualTo = null,
    string TimeUserCreatedLessThan = null,
    string UserCategory = null,
    string UserKey = null,
    string UserName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.userAssessmentId">UserAssessmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_assessment_id DataOciDataSafeUserAssessmentUserAnalytics#user_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.accessLevel">AccessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#access_level DataOciDataSafeUserAssessmentUserAnalytics#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.accountStatus">AccountStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#account_status DataOciDataSafeUserAssessmentUserAnalytics#account_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#authentication_type DataOciDataSafeUserAssessmentUserAnalytics#authentication_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#compartment_id_in_subtree DataOciDataSafeUserAssessmentUserAnalytics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#id DataOciDataSafeUserAssessmentUserAnalytics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.targetId">TargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#target_id DataOciDataSafeUserAssessmentUserAnalytics#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timeLastLoginGreaterThanOrEqualTo">TimeLastLoginGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_last_login_greater_than_or_equal_to DataOciDataSafeUserAssessmentUserAnalytics#time_last_login_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timeLastLoginLessThan">TimeLastLoginLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_last_login_less_than DataOciDataSafeUserAssessmentUserAnalytics#time_last_login_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timePasswordLastChangedGreaterThanOrEqualTo">TimePasswordLastChangedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_password_last_changed_greater_than_or_equal_to DataOciDataSafeUserAssessmentUserAnalytics#time_password_last_changed_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timePasswordLastChangedLessThan">TimePasswordLastChangedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_password_last_changed_less_than DataOciDataSafeUserAssessmentUserAnalytics#time_password_last_changed_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timeUserCreatedGreaterThanOrEqualTo">TimeUserCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_user_created_greater_than_or_equal_to DataOciDataSafeUserAssessmentUserAnalytics#time_user_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timeUserCreatedLessThan">TimeUserCreatedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_user_created_less_than DataOciDataSafeUserAssessmentUserAnalytics#time_user_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.userCategory">UserCategory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_category DataOciDataSafeUserAssessmentUserAnalytics#user_category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.userKey">UserKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_key DataOciDataSafeUserAssessmentUserAnalytics#user_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.userName">UserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_name DataOciDataSafeUserAssessmentUserAnalytics#user_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `UserAssessmentId`<sup>Required</sup> <a name="UserAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.userAssessmentId"></a>

```csharp
public string UserAssessmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_assessment_id DataOciDataSafeUserAssessmentUserAnalytics#user_assessment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.accessLevel"></a>

```csharp
public string AccessLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#access_level DataOciDataSafeUserAssessmentUserAnalytics#access_level}.

---

##### `AccountStatus`<sup>Optional</sup> <a name="AccountStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.accountStatus"></a>

```csharp
public string AccountStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#account_status DataOciDataSafeUserAssessmentUserAnalytics#account_status}.

---

##### `AuthenticationType`<sup>Optional</sup> <a name="AuthenticationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#authentication_type DataOciDataSafeUserAssessmentUserAnalytics#authentication_type}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#compartment_id_in_subtree DataOciDataSafeUserAssessmentUserAnalytics#compartment_id_in_subtree}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#filter DataOciDataSafeUserAssessmentUserAnalytics#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#id DataOciDataSafeUserAssessmentUserAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.targetId"></a>

```csharp
public string TargetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#target_id DataOciDataSafeUserAssessmentUserAnalytics#target_id}.

---

##### `TimeLastLoginGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeLastLoginGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timeLastLoginGreaterThanOrEqualTo"></a>

```csharp
public string TimeLastLoginGreaterThanOrEqualTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_last_login_greater_than_or_equal_to DataOciDataSafeUserAssessmentUserAnalytics#time_last_login_greater_than_or_equal_to}.

---

##### `TimeLastLoginLessThan`<sup>Optional</sup> <a name="TimeLastLoginLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timeLastLoginLessThan"></a>

```csharp
public string TimeLastLoginLessThan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_last_login_less_than DataOciDataSafeUserAssessmentUserAnalytics#time_last_login_less_than}.

---

##### `TimePasswordLastChangedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimePasswordLastChangedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timePasswordLastChangedGreaterThanOrEqualTo"></a>

```csharp
public string TimePasswordLastChangedGreaterThanOrEqualTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_password_last_changed_greater_than_or_equal_to DataOciDataSafeUserAssessmentUserAnalytics#time_password_last_changed_greater_than_or_equal_to}.

---

##### `TimePasswordLastChangedLessThan`<sup>Optional</sup> <a name="TimePasswordLastChangedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timePasswordLastChangedLessThan"></a>

```csharp
public string TimePasswordLastChangedLessThan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_password_last_changed_less_than DataOciDataSafeUserAssessmentUserAnalytics#time_password_last_changed_less_than}.

---

##### `TimeUserCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeUserCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timeUserCreatedGreaterThanOrEqualTo"></a>

```csharp
public string TimeUserCreatedGreaterThanOrEqualTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_user_created_greater_than_or_equal_to DataOciDataSafeUserAssessmentUserAnalytics#time_user_created_greater_than_or_equal_to}.

---

##### `TimeUserCreatedLessThan`<sup>Optional</sup> <a name="TimeUserCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.timeUserCreatedLessThan"></a>

```csharp
public string TimeUserCreatedLessThan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#time_user_created_less_than DataOciDataSafeUserAssessmentUserAnalytics#time_user_created_less_than}.

---

##### `UserCategory`<sup>Optional</sup> <a name="UserCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.userCategory"></a>

```csharp
public string UserCategory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_category DataOciDataSafeUserAssessmentUserAnalytics#user_category}.

---

##### `UserKey`<sup>Optional</sup> <a name="UserKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.userKey"></a>

```csharp
public string UserKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_key DataOciDataSafeUserAssessmentUserAnalytics#user_key}.

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsConfig.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#user_name DataOciDataSafeUserAssessmentUserAnalytics#user_name}.

---

### DataOciDataSafeUserAssessmentUserAnalyticsFilter <a name="DataOciDataSafeUserAssessmentUserAnalyticsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentUserAnalyticsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#name DataOciDataSafeUserAssessmentUserAnalytics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#values DataOciDataSafeUserAssessmentUserAnalytics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#regex DataOciDataSafeUserAssessmentUserAnalytics#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#name DataOciDataSafeUserAssessmentUserAnalytics#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#values DataOciDataSafeUserAssessmentUserAnalytics#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_user_analytics#regex DataOciDataSafeUserAssessmentUserAnalytics#regex}.

---

### DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations <a name="DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations {

};
```


### DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems <a name="DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeUserAssessmentUserAnalyticsFilterList <a name="DataOciDataSafeUserAssessmentUserAnalyticsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentUserAnalyticsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.get"></a>

```csharp
private DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference <a name="DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList <a name="DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.get"></a>

```csharp
private DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference <a name="DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems">DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems">DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItems</a>

---


### DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList <a name="DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.get"></a>

```csharp
private DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference <a name="DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList">DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations">DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.property.items"></a>

```csharp
public DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList">DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregationsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentUserAnalytics.DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations">DataOciDataSafeUserAssessmentUserAnalyticsUserAggregations</a>

---



