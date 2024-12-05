# `dataOciDataSafeSecurityAssessmentSecurityFeatures` Submodule <a name="`dataOciDataSafeSecurityAssessmentSecurityFeatures` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityAssessmentSecurityFeatures <a name="DataOciDataSafeSecurityAssessmentSecurityFeatures" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features oci_data_safe_security_assessment_security_features}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentSecurityFeatures(Construct Scope, string Id, DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig">DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig">DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetId">ResetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithColumnEncryption">ResetTargetsWithColumnEncryption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithDatabaseVault">ResetTargetsWithDatabaseVault</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithExternalAuthentication">ResetTargetsWithExternalAuthentication</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithFineGrainedAudit">ResetTargetsWithFineGrainedAudit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithGlobalAuthentication">ResetTargetsWithGlobalAuthentication</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithNetworkEncryption">ResetTargetsWithNetworkEncryption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithPasswordAuthentication">ResetTargetsWithPasswordAuthentication</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithPrivilegeAnalysis">ResetTargetsWithPrivilegeAnalysis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithTablespaceEncryption">ResetTargetsWithTablespaceEncryption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithTraditionalAudit">ResetTargetsWithTraditionalAudit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithUnifiedAudit">ResetTargetsWithUnifiedAudit</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetAccessLevel"></a>

```csharp
private void ResetAccessLevel()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetCompartmentIdInSubtree"></a>

```csharp
private void ResetCompartmentIdInSubtree()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetId"></a>

```csharp
private void ResetTargetId()
```

##### `ResetTargetsWithColumnEncryption` <a name="ResetTargetsWithColumnEncryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithColumnEncryption"></a>

```csharp
private void ResetTargetsWithColumnEncryption()
```

##### `ResetTargetsWithDatabaseVault` <a name="ResetTargetsWithDatabaseVault" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithDatabaseVault"></a>

```csharp
private void ResetTargetsWithDatabaseVault()
```

##### `ResetTargetsWithExternalAuthentication` <a name="ResetTargetsWithExternalAuthentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithExternalAuthentication"></a>

```csharp
private void ResetTargetsWithExternalAuthentication()
```

##### `ResetTargetsWithFineGrainedAudit` <a name="ResetTargetsWithFineGrainedAudit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithFineGrainedAudit"></a>

```csharp
private void ResetTargetsWithFineGrainedAudit()
```

##### `ResetTargetsWithGlobalAuthentication` <a name="ResetTargetsWithGlobalAuthentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithGlobalAuthentication"></a>

```csharp
private void ResetTargetsWithGlobalAuthentication()
```

##### `ResetTargetsWithNetworkEncryption` <a name="ResetTargetsWithNetworkEncryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithNetworkEncryption"></a>

```csharp
private void ResetTargetsWithNetworkEncryption()
```

##### `ResetTargetsWithPasswordAuthentication` <a name="ResetTargetsWithPasswordAuthentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithPasswordAuthentication"></a>

```csharp
private void ResetTargetsWithPasswordAuthentication()
```

##### `ResetTargetsWithPrivilegeAnalysis` <a name="ResetTargetsWithPrivilegeAnalysis" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithPrivilegeAnalysis"></a>

```csharp
private void ResetTargetsWithPrivilegeAnalysis()
```

##### `ResetTargetsWithTablespaceEncryption` <a name="ResetTargetsWithTablespaceEncryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithTablespaceEncryption"></a>

```csharp
private void ResetTargetsWithTablespaceEncryption()
```

##### `ResetTargetsWithTraditionalAudit` <a name="ResetTargetsWithTraditionalAudit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithTraditionalAudit"></a>

```csharp
private void ResetTargetsWithTraditionalAudit()
```

##### `ResetTargetsWithUnifiedAudit` <a name="ResetTargetsWithUnifiedAudit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithUnifiedAudit"></a>

```csharp
private void ResetTargetsWithUnifiedAudit()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentSecurityFeatures resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSecurityAssessmentSecurityFeatures.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSecurityAssessmentSecurityFeatures.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSecurityAssessmentSecurityFeatures.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSecurityAssessmentSecurityFeatures.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentSecurityFeatures resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSecurityAssessmentSecurityFeatures to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSecurityAssessmentSecurityFeatures that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityAssessmentSecurityFeatures to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList">DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.securityFeatureCollection">SecurityFeatureCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList">DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.accessLevelInput">AccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetIdInput">TargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithColumnEncryptionInput">TargetsWithColumnEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithDatabaseVaultInput">TargetsWithDatabaseVaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithExternalAuthenticationInput">TargetsWithExternalAuthenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithFineGrainedAuditInput">TargetsWithFineGrainedAuditInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithGlobalAuthenticationInput">TargetsWithGlobalAuthenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithNetworkEncryptionInput">TargetsWithNetworkEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithPasswordAuthenticationInput">TargetsWithPasswordAuthenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithPrivilegeAnalysisInput">TargetsWithPrivilegeAnalysisInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithTablespaceEncryptionInput">TargetsWithTablespaceEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithTraditionalAuditInput">TargetsWithTraditionalAuditInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithUnifiedAuditInput">TargetsWithUnifiedAuditInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.accessLevel">AccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithColumnEncryption">TargetsWithColumnEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithDatabaseVault">TargetsWithDatabaseVault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithExternalAuthentication">TargetsWithExternalAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithFineGrainedAudit">TargetsWithFineGrainedAudit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithGlobalAuthentication">TargetsWithGlobalAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithNetworkEncryption">TargetsWithNetworkEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithPasswordAuthentication">TargetsWithPasswordAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithPrivilegeAnalysis">TargetsWithPrivilegeAnalysis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithTablespaceEncryption">TargetsWithTablespaceEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithTraditionalAudit">TargetsWithTraditionalAudit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithUnifiedAudit">TargetsWithUnifiedAudit</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.filter"></a>

```csharp
public DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList">DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList</a>

---

##### `SecurityFeatureCollection`<sup>Required</sup> <a name="SecurityFeatureCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.securityFeatureCollection"></a>

```csharp
public DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList SecurityFeatureCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList">DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.accessLevelInput"></a>

```csharp
public string AccessLevelInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.compartmentIdInSubtreeInput"></a>

```csharp
public object CompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetIdInput"></a>

```csharp
public string TargetIdInput { get; }
```

- *Type:* string

---

##### `TargetsWithColumnEncryptionInput`<sup>Optional</sup> <a name="TargetsWithColumnEncryptionInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithColumnEncryptionInput"></a>

```csharp
public string TargetsWithColumnEncryptionInput { get; }
```

- *Type:* string

---

##### `TargetsWithDatabaseVaultInput`<sup>Optional</sup> <a name="TargetsWithDatabaseVaultInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithDatabaseVaultInput"></a>

```csharp
public string TargetsWithDatabaseVaultInput { get; }
```

- *Type:* string

---

##### `TargetsWithExternalAuthenticationInput`<sup>Optional</sup> <a name="TargetsWithExternalAuthenticationInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithExternalAuthenticationInput"></a>

```csharp
public string TargetsWithExternalAuthenticationInput { get; }
```

- *Type:* string

---

##### `TargetsWithFineGrainedAuditInput`<sup>Optional</sup> <a name="TargetsWithFineGrainedAuditInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithFineGrainedAuditInput"></a>

```csharp
public string TargetsWithFineGrainedAuditInput { get; }
```

- *Type:* string

---

##### `TargetsWithGlobalAuthenticationInput`<sup>Optional</sup> <a name="TargetsWithGlobalAuthenticationInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithGlobalAuthenticationInput"></a>

```csharp
public string TargetsWithGlobalAuthenticationInput { get; }
```

- *Type:* string

---

##### `TargetsWithNetworkEncryptionInput`<sup>Optional</sup> <a name="TargetsWithNetworkEncryptionInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithNetworkEncryptionInput"></a>

```csharp
public string TargetsWithNetworkEncryptionInput { get; }
```

- *Type:* string

---

##### `TargetsWithPasswordAuthenticationInput`<sup>Optional</sup> <a name="TargetsWithPasswordAuthenticationInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithPasswordAuthenticationInput"></a>

```csharp
public string TargetsWithPasswordAuthenticationInput { get; }
```

- *Type:* string

---

##### `TargetsWithPrivilegeAnalysisInput`<sup>Optional</sup> <a name="TargetsWithPrivilegeAnalysisInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithPrivilegeAnalysisInput"></a>

```csharp
public string TargetsWithPrivilegeAnalysisInput { get; }
```

- *Type:* string

---

##### `TargetsWithTablespaceEncryptionInput`<sup>Optional</sup> <a name="TargetsWithTablespaceEncryptionInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithTablespaceEncryptionInput"></a>

```csharp
public string TargetsWithTablespaceEncryptionInput { get; }
```

- *Type:* string

---

##### `TargetsWithTraditionalAuditInput`<sup>Optional</sup> <a name="TargetsWithTraditionalAuditInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithTraditionalAuditInput"></a>

```csharp
public string TargetsWithTraditionalAuditInput { get; }
```

- *Type:* string

---

##### `TargetsWithUnifiedAuditInput`<sup>Optional</sup> <a name="TargetsWithUnifiedAuditInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithUnifiedAuditInput"></a>

```csharp
public string TargetsWithUnifiedAuditInput { get; }
```

- *Type:* string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.accessLevel"></a>

```csharp
public string AccessLevel { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `TargetsWithColumnEncryption`<sup>Required</sup> <a name="TargetsWithColumnEncryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithColumnEncryption"></a>

```csharp
public string TargetsWithColumnEncryption { get; }
```

- *Type:* string

---

##### `TargetsWithDatabaseVault`<sup>Required</sup> <a name="TargetsWithDatabaseVault" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithDatabaseVault"></a>

```csharp
public string TargetsWithDatabaseVault { get; }
```

- *Type:* string

---

##### `TargetsWithExternalAuthentication`<sup>Required</sup> <a name="TargetsWithExternalAuthentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithExternalAuthentication"></a>

```csharp
public string TargetsWithExternalAuthentication { get; }
```

- *Type:* string

---

##### `TargetsWithFineGrainedAudit`<sup>Required</sup> <a name="TargetsWithFineGrainedAudit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithFineGrainedAudit"></a>

```csharp
public string TargetsWithFineGrainedAudit { get; }
```

- *Type:* string

---

##### `TargetsWithGlobalAuthentication`<sup>Required</sup> <a name="TargetsWithGlobalAuthentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithGlobalAuthentication"></a>

```csharp
public string TargetsWithGlobalAuthentication { get; }
```

- *Type:* string

---

##### `TargetsWithNetworkEncryption`<sup>Required</sup> <a name="TargetsWithNetworkEncryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithNetworkEncryption"></a>

```csharp
public string TargetsWithNetworkEncryption { get; }
```

- *Type:* string

---

##### `TargetsWithPasswordAuthentication`<sup>Required</sup> <a name="TargetsWithPasswordAuthentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithPasswordAuthentication"></a>

```csharp
public string TargetsWithPasswordAuthentication { get; }
```

- *Type:* string

---

##### `TargetsWithPrivilegeAnalysis`<sup>Required</sup> <a name="TargetsWithPrivilegeAnalysis" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithPrivilegeAnalysis"></a>

```csharp
public string TargetsWithPrivilegeAnalysis { get; }
```

- *Type:* string

---

##### `TargetsWithTablespaceEncryption`<sup>Required</sup> <a name="TargetsWithTablespaceEncryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithTablespaceEncryption"></a>

```csharp
public string TargetsWithTablespaceEncryption { get; }
```

- *Type:* string

---

##### `TargetsWithTraditionalAudit`<sup>Required</sup> <a name="TargetsWithTraditionalAudit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithTraditionalAudit"></a>

```csharp
public string TargetsWithTraditionalAudit { get; }
```

- *Type:* string

---

##### `TargetsWithUnifiedAudit`<sup>Required</sup> <a name="TargetsWithUnifiedAudit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithUnifiedAudit"></a>

```csharp
public string TargetsWithUnifiedAudit { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig <a name="DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig {
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
    object Filter = null,
    string Id = null,
    string TargetId = null,
    string TargetsWithColumnEncryption = null,
    string TargetsWithDatabaseVault = null,
    string TargetsWithExternalAuthentication = null,
    string TargetsWithFineGrainedAudit = null,
    string TargetsWithGlobalAuthentication = null,
    string TargetsWithNetworkEncryption = null,
    string TargetsWithPasswordAuthentication = null,
    string TargetsWithPrivilegeAnalysis = null,
    string TargetsWithTablespaceEncryption = null,
    string TargetsWithTraditionalAudit = null,
    string TargetsWithUnifiedAudit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#compartment_id DataOciDataSafeSecurityAssessmentSecurityFeatures#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.accessLevel">AccessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#access_level DataOciDataSafeSecurityAssessmentSecurityFeatures#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentSecurityFeatures#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#id DataOciDataSafeSecurityAssessmentSecurityFeatures#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetId">TargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#target_id DataOciDataSafeSecurityAssessmentSecurityFeatures#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithColumnEncryption">TargetsWithColumnEncryption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_column_encryption DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_column_encryption}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithDatabaseVault">TargetsWithDatabaseVault</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_database_vault DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_database_vault}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithExternalAuthentication">TargetsWithExternalAuthentication</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_external_authentication DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_external_authentication}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithFineGrainedAudit">TargetsWithFineGrainedAudit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_fine_grained_audit DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_fine_grained_audit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithGlobalAuthentication">TargetsWithGlobalAuthentication</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_global_authentication DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_global_authentication}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithNetworkEncryption">TargetsWithNetworkEncryption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_network_encryption DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_network_encryption}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithPasswordAuthentication">TargetsWithPasswordAuthentication</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_password_authentication DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_password_authentication}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithPrivilegeAnalysis">TargetsWithPrivilegeAnalysis</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_privilege_analysis DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_privilege_analysis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithTablespaceEncryption">TargetsWithTablespaceEncryption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_tablespace_encryption DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_tablespace_encryption}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithTraditionalAudit">TargetsWithTraditionalAudit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_traditional_audit DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_traditional_audit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithUnifiedAudit">TargetsWithUnifiedAudit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_unified_audit DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_unified_audit}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#compartment_id DataOciDataSafeSecurityAssessmentSecurityFeatures#compartment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.accessLevel"></a>

```csharp
public string AccessLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#access_level DataOciDataSafeSecurityAssessmentSecurityFeatures#access_level}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentSecurityFeatures#compartment_id_in_subtree}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#filter DataOciDataSafeSecurityAssessmentSecurityFeatures#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#id DataOciDataSafeSecurityAssessmentSecurityFeatures#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetId"></a>

```csharp
public string TargetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#target_id DataOciDataSafeSecurityAssessmentSecurityFeatures#target_id}.

---

##### `TargetsWithColumnEncryption`<sup>Optional</sup> <a name="TargetsWithColumnEncryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithColumnEncryption"></a>

```csharp
public string TargetsWithColumnEncryption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_column_encryption DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_column_encryption}.

---

##### `TargetsWithDatabaseVault`<sup>Optional</sup> <a name="TargetsWithDatabaseVault" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithDatabaseVault"></a>

```csharp
public string TargetsWithDatabaseVault { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_database_vault DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_database_vault}.

---

##### `TargetsWithExternalAuthentication`<sup>Optional</sup> <a name="TargetsWithExternalAuthentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithExternalAuthentication"></a>

```csharp
public string TargetsWithExternalAuthentication { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_external_authentication DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_external_authentication}.

---

##### `TargetsWithFineGrainedAudit`<sup>Optional</sup> <a name="TargetsWithFineGrainedAudit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithFineGrainedAudit"></a>

```csharp
public string TargetsWithFineGrainedAudit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_fine_grained_audit DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_fine_grained_audit}.

---

##### `TargetsWithGlobalAuthentication`<sup>Optional</sup> <a name="TargetsWithGlobalAuthentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithGlobalAuthentication"></a>

```csharp
public string TargetsWithGlobalAuthentication { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_global_authentication DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_global_authentication}.

---

##### `TargetsWithNetworkEncryption`<sup>Optional</sup> <a name="TargetsWithNetworkEncryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithNetworkEncryption"></a>

```csharp
public string TargetsWithNetworkEncryption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_network_encryption DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_network_encryption}.

---

##### `TargetsWithPasswordAuthentication`<sup>Optional</sup> <a name="TargetsWithPasswordAuthentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithPasswordAuthentication"></a>

```csharp
public string TargetsWithPasswordAuthentication { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_password_authentication DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_password_authentication}.

---

##### `TargetsWithPrivilegeAnalysis`<sup>Optional</sup> <a name="TargetsWithPrivilegeAnalysis" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithPrivilegeAnalysis"></a>

```csharp
public string TargetsWithPrivilegeAnalysis { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_privilege_analysis DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_privilege_analysis}.

---

##### `TargetsWithTablespaceEncryption`<sup>Optional</sup> <a name="TargetsWithTablespaceEncryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithTablespaceEncryption"></a>

```csharp
public string TargetsWithTablespaceEncryption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_tablespace_encryption DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_tablespace_encryption}.

---

##### `TargetsWithTraditionalAudit`<sup>Optional</sup> <a name="TargetsWithTraditionalAudit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithTraditionalAudit"></a>

```csharp
public string TargetsWithTraditionalAudit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_traditional_audit DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_traditional_audit}.

---

##### `TargetsWithUnifiedAudit`<sup>Optional</sup> <a name="TargetsWithUnifiedAudit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithUnifiedAudit"></a>

```csharp
public string TargetsWithUnifiedAudit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_unified_audit DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_unified_audit}.

---

### DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter <a name="DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#name DataOciDataSafeSecurityAssessmentSecurityFeatures#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#values DataOciDataSafeSecurityAssessmentSecurityFeatures#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#regex DataOciDataSafeSecurityAssessmentSecurityFeatures#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#name DataOciDataSafeSecurityAssessmentSecurityFeatures#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#values DataOciDataSafeSecurityAssessmentSecurityFeatures#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#regex DataOciDataSafeSecurityAssessmentSecurityFeatures#regex}.

---

### DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection <a name="DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection {

};
```


### DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems <a name="DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList <a name="DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.get"></a>

```csharp
private DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference <a name="DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList <a name="DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.get"></a>

```csharp
private DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference <a name="DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.assessmentId">AssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.columnEncryption">ColumnEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.databaseVault">DatabaseVault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.externalAuthentication">ExternalAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.fineGrainedAudit">FineGrainedAudit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.globalAuthentication">GlobalAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.networkEncryption">NetworkEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.passwordAuthentication">PasswordAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.privilegeAnalysis">PrivilegeAnalysis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.tablespaceEncryption">TablespaceEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.traditionalAudit">TraditionalAudit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.unifiedAudit">UnifiedAudit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems">DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssessmentId`<sup>Required</sup> <a name="AssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.assessmentId"></a>

```csharp
public string AssessmentId { get; }
```

- *Type:* string

---

##### `ColumnEncryption`<sup>Required</sup> <a name="ColumnEncryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.columnEncryption"></a>

```csharp
public string ColumnEncryption { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DatabaseVault`<sup>Required</sup> <a name="DatabaseVault" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.databaseVault"></a>

```csharp
public string DatabaseVault { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ExternalAuthentication`<sup>Required</sup> <a name="ExternalAuthentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.externalAuthentication"></a>

```csharp
public string ExternalAuthentication { get; }
```

- *Type:* string

---

##### `FineGrainedAudit`<sup>Required</sup> <a name="FineGrainedAudit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.fineGrainedAudit"></a>

```csharp
public string FineGrainedAudit { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `GlobalAuthentication`<sup>Required</sup> <a name="GlobalAuthentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.globalAuthentication"></a>

```csharp
public string GlobalAuthentication { get; }
```

- *Type:* string

---

##### `NetworkEncryption`<sup>Required</sup> <a name="NetworkEncryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.networkEncryption"></a>

```csharp
public string NetworkEncryption { get; }
```

- *Type:* string

---

##### `PasswordAuthentication`<sup>Required</sup> <a name="PasswordAuthentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.passwordAuthentication"></a>

```csharp
public string PasswordAuthentication { get; }
```

- *Type:* string

---

##### `PrivilegeAnalysis`<sup>Required</sup> <a name="PrivilegeAnalysis" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.privilegeAnalysis"></a>

```csharp
public string PrivilegeAnalysis { get; }
```

- *Type:* string

---

##### `TablespaceEncryption`<sup>Required</sup> <a name="TablespaceEncryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.tablespaceEncryption"></a>

```csharp
public string TablespaceEncryption { get; }
```

- *Type:* string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `TraditionalAudit`<sup>Required</sup> <a name="TraditionalAudit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.traditionalAudit"></a>

```csharp
public string TraditionalAudit { get; }
```

- *Type:* string

---

##### `UnifiedAudit`<sup>Required</sup> <a name="UnifiedAudit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.unifiedAudit"></a>

```csharp
public string UnifiedAudit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems">DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems</a>

---


### DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList <a name="DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.get"></a>

```csharp
private DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference <a name="DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList">DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection">DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.property.items"></a>

```csharp
public DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList">DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection">DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection</a>

---



