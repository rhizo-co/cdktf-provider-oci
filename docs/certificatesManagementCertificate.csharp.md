# `certificatesManagementCertificate` Submodule <a name="`certificatesManagementCertificate` Submodule" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificatesManagementCertificate <a name="CertificatesManagementCertificate" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate oci_certificates_management_certificate}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificate(Construct Scope, string Id, CertificatesManagementCertificateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig">CertificatesManagementCertificateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig">CertificatesManagementCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateConfig">PutCertificateConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateRules">PutCertificateRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetCertificateRules">ResetCertificateRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCertificateConfig` <a name="PutCertificateConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateConfig"></a>

```csharp
private void PutCertificateConfig(CertificatesManagementCertificateCertificateConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a>

---

##### `PutCertificateRules` <a name="PutCertificateRules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateRules"></a>

```csharp
private void PutCertificateRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateRules.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putTimeouts"></a>

```csharp
private void PutTimeouts(CertificatesManagementCertificateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts">CertificatesManagementCertificateTimeouts</a>

---

##### `ResetCertificateRules` <a name="ResetCertificateRules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetCertificateRules"></a>

```csharp
private void ResetCertificateRules()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CertificatesManagementCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CertificatesManagementCertificate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CertificatesManagementCertificate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CertificatesManagementCertificate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CertificatesManagementCertificate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CertificatesManagementCertificate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CertificatesManagementCertificate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CertificatesManagementCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CertificatesManagementCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateConfig">CertificateConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference">CertificatesManagementCertificateCertificateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateProfileType">CertificateProfileType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateRevocationListDetails">CertificateRevocationListDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList">CertificatesManagementCertificateCertificateRevocationListDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateRules">CertificateRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList">CertificatesManagementCertificateCertificateRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.configType">ConfigType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.currentVersion">CurrentVersion</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList">CertificatesManagementCertificateCurrentVersionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.issuerCertificateAuthorityId">IssuerCertificateAuthorityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.subject">Subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList">CertificatesManagementCertificateSubjectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeOfDeletion">TimeOfDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference">CertificatesManagementCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateConfigInput">CertificateConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateRulesInput">CertificateRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CertificateConfig`<sup>Required</sup> <a name="CertificateConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateConfig"></a>

```csharp
public CertificatesManagementCertificateCertificateConfigOutputReference CertificateConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference">CertificatesManagementCertificateCertificateConfigOutputReference</a>

---

##### `CertificateProfileType`<sup>Required</sup> <a name="CertificateProfileType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateProfileType"></a>

```csharp
public string CertificateProfileType { get; }
```

- *Type:* string

---

##### `CertificateRevocationListDetails`<sup>Required</sup> <a name="CertificateRevocationListDetails" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateRevocationListDetails"></a>

```csharp
public CertificatesManagementCertificateCertificateRevocationListDetailsList CertificateRevocationListDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList">CertificatesManagementCertificateCertificateRevocationListDetailsList</a>

---

##### `CertificateRules`<sup>Required</sup> <a name="CertificateRules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateRules"></a>

```csharp
public CertificatesManagementCertificateCertificateRulesList CertificateRules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList">CertificatesManagementCertificateCertificateRulesList</a>

---

##### `ConfigType`<sup>Required</sup> <a name="ConfigType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.configType"></a>

```csharp
public string ConfigType { get; }
```

- *Type:* string

---

##### `CurrentVersion`<sup>Required</sup> <a name="CurrentVersion" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.currentVersion"></a>

```csharp
public CertificatesManagementCertificateCurrentVersionList CurrentVersion { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList">CertificatesManagementCertificateCurrentVersionList</a>

---

##### `IssuerCertificateAuthorityId`<sup>Required</sup> <a name="IssuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.issuerCertificateAuthorityId"></a>

```csharp
public string IssuerCertificateAuthorityId { get; }
```

- *Type:* string

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.keyAlgorithm"></a>

```csharp
public string KeyAlgorithm { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `SignatureAlgorithm`<sup>Required</sup> <a name="SignatureAlgorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.signatureAlgorithm"></a>

```csharp
public string SignatureAlgorithm { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.subject"></a>

```csharp
public CertificatesManagementCertificateSubjectList Subject { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList">CertificatesManagementCertificateSubjectList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeOfDeletion`<sup>Required</sup> <a name="TimeOfDeletion" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeOfDeletion"></a>

```csharp
public string TimeOfDeletion { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeouts"></a>

```csharp
public CertificatesManagementCertificateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference">CertificatesManagementCertificateTimeoutsOutputReference</a>

---

##### `CertificateConfigInput`<sup>Optional</sup> <a name="CertificateConfigInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateConfigInput"></a>

```csharp
public CertificatesManagementCertificateCertificateConfig CertificateConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a>

---

##### `CertificateRulesInput`<sup>Optional</sup> <a name="CertificateRulesInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateRulesInput"></a>

```csharp
public object CertificateRulesInput { get; }
```

- *Type:* object

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificatesManagementCertificateCertificateConfig <a name="CertificatesManagementCertificateCertificateConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateCertificateConfig {
    string ConfigType,
    string CertificateProfileType = null,
    string CsrPem = null,
    string IssuerCertificateAuthorityId = null,
    string KeyAlgorithm = null,
    string SignatureAlgorithm = null,
    CertificatesManagementCertificateCertificateConfigSubject Subject = null,
    object SubjectAlternativeNames = null,
    CertificatesManagementCertificateCertificateConfigValidity Validity = null,
    string VersionName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.configType">ConfigType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#config_type CertificatesManagementCertificate#config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.certificateProfileType">CertificateProfileType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#certificate_profile_type CertificatesManagementCertificate#certificate_profile_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.csrPem">CsrPem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#csr_pem CertificatesManagementCertificate#csr_pem}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.issuerCertificateAuthorityId">IssuerCertificateAuthorityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#issuer_certificate_authority_id CertificatesManagementCertificate#issuer_certificate_authority_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#key_algorithm CertificatesManagementCertificate#key_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#signature_algorithm CertificatesManagementCertificate#signature_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.subject">Subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject">CertificatesManagementCertificateCertificateConfigSubject</a></code> | subject block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code>object</code> | subject_alternative_names block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.validity">Validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity">CertificatesManagementCertificateCertificateConfigValidity</a></code> | validity block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.versionName">VersionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#version_name CertificatesManagementCertificate#version_name}. |

---

##### `ConfigType`<sup>Required</sup> <a name="ConfigType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.configType"></a>

```csharp
public string ConfigType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#config_type CertificatesManagementCertificate#config_type}.

---

##### `CertificateProfileType`<sup>Optional</sup> <a name="CertificateProfileType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.certificateProfileType"></a>

```csharp
public string CertificateProfileType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#certificate_profile_type CertificatesManagementCertificate#certificate_profile_type}.

---

##### `CsrPem`<sup>Optional</sup> <a name="CsrPem" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.csrPem"></a>

```csharp
public string CsrPem { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#csr_pem CertificatesManagementCertificate#csr_pem}.

---

##### `IssuerCertificateAuthorityId`<sup>Optional</sup> <a name="IssuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.issuerCertificateAuthorityId"></a>

```csharp
public string IssuerCertificateAuthorityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#issuer_certificate_authority_id CertificatesManagementCertificate#issuer_certificate_authority_id}.

---

##### `KeyAlgorithm`<sup>Optional</sup> <a name="KeyAlgorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.keyAlgorithm"></a>

```csharp
public string KeyAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#key_algorithm CertificatesManagementCertificate#key_algorithm}.

---

##### `SignatureAlgorithm`<sup>Optional</sup> <a name="SignatureAlgorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.signatureAlgorithm"></a>

```csharp
public string SignatureAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#signature_algorithm CertificatesManagementCertificate#signature_algorithm}.

---

##### `Subject`<sup>Optional</sup> <a name="Subject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.subject"></a>

```csharp
public CertificatesManagementCertificateCertificateConfigSubject Subject { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject">CertificatesManagementCertificateCertificateConfigSubject</a>

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#subject CertificatesManagementCertificate#subject}

---

##### `SubjectAlternativeNames`<sup>Optional</sup> <a name="SubjectAlternativeNames" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.subjectAlternativeNames"></a>

```csharp
public object SubjectAlternativeNames { get; set; }
```

- *Type:* object

subject_alternative_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#subject_alternative_names CertificatesManagementCertificate#subject_alternative_names}

---

##### `Validity`<sup>Optional</sup> <a name="Validity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.validity"></a>

```csharp
public CertificatesManagementCertificateCertificateConfigValidity Validity { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity">CertificatesManagementCertificateCertificateConfigValidity</a>

validity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#validity CertificatesManagementCertificate#validity}

---

##### `VersionName`<sup>Optional</sup> <a name="VersionName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.versionName"></a>

```csharp
public string VersionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#version_name CertificatesManagementCertificate#version_name}.

---

### CertificatesManagementCertificateCertificateConfigSubject <a name="CertificatesManagementCertificateCertificateConfigSubject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateCertificateConfigSubject {
    string CommonName,
    string Country = null,
    string DistinguishedNameQualifier = null,
    string DomainComponent = null,
    string GenerationQualifier = null,
    string GivenName = null,
    string Initials = null,
    string LocalityName = null,
    string Organization = null,
    string OrganizationalUnit = null,
    string Pseudonym = null,
    string SerialNumber = null,
    string StateOrProvinceName = null,
    string Street = null,
    string Surname = null,
    string Title = null,
    string UserId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.commonName">CommonName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#common_name CertificatesManagementCertificate#common_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.country">Country</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#country CertificatesManagementCertificate#country}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.distinguishedNameQualifier">DistinguishedNameQualifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#distinguished_name_qualifier CertificatesManagementCertificate#distinguished_name_qualifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.domainComponent">DomainComponent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#domain_component CertificatesManagementCertificate#domain_component}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.generationQualifier">GenerationQualifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#generation_qualifier CertificatesManagementCertificate#generation_qualifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.givenName">GivenName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#given_name CertificatesManagementCertificate#given_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.initials">Initials</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#initials CertificatesManagementCertificate#initials}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.localityName">LocalityName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#locality_name CertificatesManagementCertificate#locality_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.organization">Organization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#organization CertificatesManagementCertificate#organization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.organizationalUnit">OrganizationalUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#organizational_unit CertificatesManagementCertificate#organizational_unit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.pseudonym">Pseudonym</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#pseudonym CertificatesManagementCertificate#pseudonym}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.serialNumber">SerialNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#serial_number CertificatesManagementCertificate#serial_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.stateOrProvinceName">StateOrProvinceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#state_or_province_name CertificatesManagementCertificate#state_or_province_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.street">Street</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#street CertificatesManagementCertificate#street}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.surname">Surname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#surname CertificatesManagementCertificate#surname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#title CertificatesManagementCertificate#title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.userId">UserId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#user_id CertificatesManagementCertificate#user_id}. |

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.commonName"></a>

```csharp
public string CommonName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#common_name CertificatesManagementCertificate#common_name}.

---

##### `Country`<sup>Optional</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.country"></a>

```csharp
public string Country { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#country CertificatesManagementCertificate#country}.

---

##### `DistinguishedNameQualifier`<sup>Optional</sup> <a name="DistinguishedNameQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.distinguishedNameQualifier"></a>

```csharp
public string DistinguishedNameQualifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#distinguished_name_qualifier CertificatesManagementCertificate#distinguished_name_qualifier}.

---

##### `DomainComponent`<sup>Optional</sup> <a name="DomainComponent" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.domainComponent"></a>

```csharp
public string DomainComponent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#domain_component CertificatesManagementCertificate#domain_component}.

---

##### `GenerationQualifier`<sup>Optional</sup> <a name="GenerationQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.generationQualifier"></a>

```csharp
public string GenerationQualifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#generation_qualifier CertificatesManagementCertificate#generation_qualifier}.

---

##### `GivenName`<sup>Optional</sup> <a name="GivenName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.givenName"></a>

```csharp
public string GivenName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#given_name CertificatesManagementCertificate#given_name}.

---

##### `Initials`<sup>Optional</sup> <a name="Initials" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.initials"></a>

```csharp
public string Initials { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#initials CertificatesManagementCertificate#initials}.

---

##### `LocalityName`<sup>Optional</sup> <a name="LocalityName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.localityName"></a>

```csharp
public string LocalityName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#locality_name CertificatesManagementCertificate#locality_name}.

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#organization CertificatesManagementCertificate#organization}.

---

##### `OrganizationalUnit`<sup>Optional</sup> <a name="OrganizationalUnit" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.organizationalUnit"></a>

```csharp
public string OrganizationalUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#organizational_unit CertificatesManagementCertificate#organizational_unit}.

---

##### `Pseudonym`<sup>Optional</sup> <a name="Pseudonym" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.pseudonym"></a>

```csharp
public string Pseudonym { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#pseudonym CertificatesManagementCertificate#pseudonym}.

---

##### `SerialNumber`<sup>Optional</sup> <a name="SerialNumber" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.serialNumber"></a>

```csharp
public string SerialNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#serial_number CertificatesManagementCertificate#serial_number}.

---

##### `StateOrProvinceName`<sup>Optional</sup> <a name="StateOrProvinceName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.stateOrProvinceName"></a>

```csharp
public string StateOrProvinceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#state_or_province_name CertificatesManagementCertificate#state_or_province_name}.

---

##### `Street`<sup>Optional</sup> <a name="Street" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.street"></a>

```csharp
public string Street { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#street CertificatesManagementCertificate#street}.

---

##### `Surname`<sup>Optional</sup> <a name="Surname" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.surname"></a>

```csharp
public string Surname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#surname CertificatesManagementCertificate#surname}.

---

##### `Title`<sup>Optional</sup> <a name="Title" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#title CertificatesManagementCertificate#title}.

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#user_id CertificatesManagementCertificate#user_id}.

---

### CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames <a name="CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames {
    string Type,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#type CertificatesManagementCertificate#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#value CertificatesManagementCertificate#value}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#type CertificatesManagementCertificate#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#value CertificatesManagementCertificate#value}.

---

### CertificatesManagementCertificateCertificateConfigValidity <a name="CertificatesManagementCertificateCertificateConfigValidity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateCertificateConfigValidity {
    string TimeOfValidityNotAfter,
    string TimeOfValidityNotBefore = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity.property.timeOfValidityNotAfter">TimeOfValidityNotAfter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#time_of_validity_not_after CertificatesManagementCertificate#time_of_validity_not_after}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity.property.timeOfValidityNotBefore">TimeOfValidityNotBefore</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#time_of_validity_not_before CertificatesManagementCertificate#time_of_validity_not_before}. |

---

##### `TimeOfValidityNotAfter`<sup>Required</sup> <a name="TimeOfValidityNotAfter" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity.property.timeOfValidityNotAfter"></a>

```csharp
public string TimeOfValidityNotAfter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#time_of_validity_not_after CertificatesManagementCertificate#time_of_validity_not_after}.

---

##### `TimeOfValidityNotBefore`<sup>Optional</sup> <a name="TimeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity.property.timeOfValidityNotBefore"></a>

```csharp
public string TimeOfValidityNotBefore { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#time_of_validity_not_before CertificatesManagementCertificate#time_of_validity_not_before}.

---

### CertificatesManagementCertificateCertificateRevocationListDetails <a name="CertificatesManagementCertificateCertificateRevocationListDetails" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateCertificateRevocationListDetails {

};
```


### CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig <a name="CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig {

};
```


### CertificatesManagementCertificateCertificateRules <a name="CertificatesManagementCertificateCertificateRules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateCertificateRules {
    string AdvanceRenewalPeriod,
    string RenewalInterval,
    string RuleType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules.property.advanceRenewalPeriod">AdvanceRenewalPeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#advance_renewal_period CertificatesManagementCertificate#advance_renewal_period}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules.property.renewalInterval">RenewalInterval</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#renewal_interval CertificatesManagementCertificate#renewal_interval}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules.property.ruleType">RuleType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#rule_type CertificatesManagementCertificate#rule_type}. |

---

##### `AdvanceRenewalPeriod`<sup>Required</sup> <a name="AdvanceRenewalPeriod" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules.property.advanceRenewalPeriod"></a>

```csharp
public string AdvanceRenewalPeriod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#advance_renewal_period CertificatesManagementCertificate#advance_renewal_period}.

---

##### `RenewalInterval`<sup>Required</sup> <a name="RenewalInterval" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules.property.renewalInterval"></a>

```csharp
public string RenewalInterval { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#renewal_interval CertificatesManagementCertificate#renewal_interval}.

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules.property.ruleType"></a>

```csharp
public string RuleType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#rule_type CertificatesManagementCertificate#rule_type}.

---

### CertificatesManagementCertificateConfig <a name="CertificatesManagementCertificateConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    CertificatesManagementCertificateCertificateConfig CertificateConfig,
    string CompartmentId,
    string Name,
    object CertificateRules = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    CertificatesManagementCertificateTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.certificateConfig">CertificateConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a></code> | certificate_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#compartment_id CertificatesManagementCertificate#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#name CertificatesManagementCertificate#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.certificateRules">CertificateRules</a></code> | <code>object</code> | certificate_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#defined_tags CertificatesManagementCertificate#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#description CertificatesManagementCertificate#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#freeform_tags CertificatesManagementCertificate#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#id CertificatesManagementCertificate#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts">CertificatesManagementCertificateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CertificateConfig`<sup>Required</sup> <a name="CertificateConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.certificateConfig"></a>

```csharp
public CertificatesManagementCertificateCertificateConfig CertificateConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a>

certificate_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#certificate_config CertificatesManagementCertificate#certificate_config}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#compartment_id CertificatesManagementCertificate#compartment_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#name CertificatesManagementCertificate#name}.

---

##### `CertificateRules`<sup>Optional</sup> <a name="CertificateRules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.certificateRules"></a>

```csharp
public object CertificateRules { get; set; }
```

- *Type:* object

certificate_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#certificate_rules CertificatesManagementCertificate#certificate_rules}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#defined_tags CertificatesManagementCertificate#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#description CertificatesManagementCertificate#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#freeform_tags CertificatesManagementCertificate#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#id CertificatesManagementCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.timeouts"></a>

```csharp
public CertificatesManagementCertificateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts">CertificatesManagementCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#timeouts CertificatesManagementCertificate#timeouts}

---

### CertificatesManagementCertificateCurrentVersion <a name="CertificatesManagementCertificateCurrentVersion" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersion"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateCurrentVersion {

};
```


### CertificatesManagementCertificateCurrentVersionRevocationStatus <a name="CertificatesManagementCertificateCurrentVersionRevocationStatus" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatus"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateCurrentVersionRevocationStatus {

};
```


### CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames <a name="CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames {

};
```


### CertificatesManagementCertificateCurrentVersionValidity <a name="CertificatesManagementCertificateCurrentVersionValidity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateCurrentVersionValidity {

};
```


### CertificatesManagementCertificateSubject <a name="CertificatesManagementCertificateSubject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateSubject {

};
```


### CertificatesManagementCertificateTimeouts <a name="CertificatesManagementCertificateTimeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#create CertificatesManagementCertificate#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#delete CertificatesManagementCertificate#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#update CertificatesManagementCertificate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#create CertificatesManagementCertificate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#delete CertificatesManagementCertificate#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#update CertificatesManagementCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificatesManagementCertificateCertificateConfigOutputReference <a name="CertificatesManagementCertificateCertificateConfigOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateCertificateConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubject">PutSubject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubjectAlternativeNames">PutSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putValidity">PutValidity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetCertificateProfileType">ResetCertificateProfileType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetCsrPem">ResetCsrPem</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetIssuerCertificateAuthorityId">ResetIssuerCertificateAuthorityId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetKeyAlgorithm">ResetKeyAlgorithm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetSignatureAlgorithm">ResetSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetSubject">ResetSubject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetSubjectAlternativeNames">ResetSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetValidity">ResetValidity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetVersionName">ResetVersionName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSubject` <a name="PutSubject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubject"></a>

```csharp
private void PutSubject(CertificatesManagementCertificateCertificateConfigSubject Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubject.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject">CertificatesManagementCertificateCertificateConfigSubject</a>

---

##### `PutSubjectAlternativeNames` <a name="PutSubjectAlternativeNames" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubjectAlternativeNames"></a>

```csharp
private void PutSubjectAlternativeNames(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubjectAlternativeNames.parameter.value"></a>

- *Type:* object

---

##### `PutValidity` <a name="PutValidity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putValidity"></a>

```csharp
private void PutValidity(CertificatesManagementCertificateCertificateConfigValidity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putValidity.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity">CertificatesManagementCertificateCertificateConfigValidity</a>

---

##### `ResetCertificateProfileType` <a name="ResetCertificateProfileType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetCertificateProfileType"></a>

```csharp
private void ResetCertificateProfileType()
```

##### `ResetCsrPem` <a name="ResetCsrPem" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetCsrPem"></a>

```csharp
private void ResetCsrPem()
```

##### `ResetIssuerCertificateAuthorityId` <a name="ResetIssuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetIssuerCertificateAuthorityId"></a>

```csharp
private void ResetIssuerCertificateAuthorityId()
```

##### `ResetKeyAlgorithm` <a name="ResetKeyAlgorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetKeyAlgorithm"></a>

```csharp
private void ResetKeyAlgorithm()
```

##### `ResetSignatureAlgorithm` <a name="ResetSignatureAlgorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetSignatureAlgorithm"></a>

```csharp
private void ResetSignatureAlgorithm()
```

##### `ResetSubject` <a name="ResetSubject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetSubject"></a>

```csharp
private void ResetSubject()
```

##### `ResetSubjectAlternativeNames` <a name="ResetSubjectAlternativeNames" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetSubjectAlternativeNames"></a>

```csharp
private void ResetSubjectAlternativeNames()
```

##### `ResetValidity` <a name="ResetValidity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetValidity"></a>

```csharp
private void ResetValidity()
```

##### `ResetVersionName` <a name="ResetVersionName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetVersionName"></a>

```csharp
private void ResetVersionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subject">Subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference">CertificatesManagementCertificateCertificateConfigSubjectOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.validity">Validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference">CertificatesManagementCertificateCertificateConfigValidityOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.certificateProfileTypeInput">CertificateProfileTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.configTypeInput">ConfigTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.csrPemInput">CsrPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.issuerCertificateAuthorityIdInput">IssuerCertificateAuthorityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.keyAlgorithmInput">KeyAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.signatureAlgorithmInput">SignatureAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subjectAlternativeNamesInput">SubjectAlternativeNamesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subjectInput">SubjectInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject">CertificatesManagementCertificateCertificateConfigSubject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.validityInput">ValidityInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity">CertificatesManagementCertificateCertificateConfigValidity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.versionNameInput">VersionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.certificateProfileType">CertificateProfileType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.configType">ConfigType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.csrPem">CsrPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.issuerCertificateAuthorityId">IssuerCertificateAuthorityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.versionName">VersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subject"></a>

```csharp
public CertificatesManagementCertificateCertificateConfigSubjectOutputReference Subject { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference">CertificatesManagementCertificateCertificateConfigSubjectOutputReference</a>

---

##### `SubjectAlternativeNames`<sup>Required</sup> <a name="SubjectAlternativeNames" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subjectAlternativeNames"></a>

```csharp
public CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList SubjectAlternativeNames { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList</a>

---

##### `Validity`<sup>Required</sup> <a name="Validity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.validity"></a>

```csharp
public CertificatesManagementCertificateCertificateConfigValidityOutputReference Validity { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference">CertificatesManagementCertificateCertificateConfigValidityOutputReference</a>

---

##### `CertificateProfileTypeInput`<sup>Optional</sup> <a name="CertificateProfileTypeInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.certificateProfileTypeInput"></a>

```csharp
public string CertificateProfileTypeInput { get; }
```

- *Type:* string

---

##### `ConfigTypeInput`<sup>Optional</sup> <a name="ConfigTypeInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.configTypeInput"></a>

```csharp
public string ConfigTypeInput { get; }
```

- *Type:* string

---

##### `CsrPemInput`<sup>Optional</sup> <a name="CsrPemInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.csrPemInput"></a>

```csharp
public string CsrPemInput { get; }
```

- *Type:* string

---

##### `IssuerCertificateAuthorityIdInput`<sup>Optional</sup> <a name="IssuerCertificateAuthorityIdInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.issuerCertificateAuthorityIdInput"></a>

```csharp
public string IssuerCertificateAuthorityIdInput { get; }
```

- *Type:* string

---

##### `KeyAlgorithmInput`<sup>Optional</sup> <a name="KeyAlgorithmInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.keyAlgorithmInput"></a>

```csharp
public string KeyAlgorithmInput { get; }
```

- *Type:* string

---

##### `SignatureAlgorithmInput`<sup>Optional</sup> <a name="SignatureAlgorithmInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.signatureAlgorithmInput"></a>

```csharp
public string SignatureAlgorithmInput { get; }
```

- *Type:* string

---

##### `SubjectAlternativeNamesInput`<sup>Optional</sup> <a name="SubjectAlternativeNamesInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subjectAlternativeNamesInput"></a>

```csharp
public object SubjectAlternativeNamesInput { get; }
```

- *Type:* object

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subjectInput"></a>

```csharp
public CertificatesManagementCertificateCertificateConfigSubject SubjectInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject">CertificatesManagementCertificateCertificateConfigSubject</a>

---

##### `ValidityInput`<sup>Optional</sup> <a name="ValidityInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.validityInput"></a>

```csharp
public CertificatesManagementCertificateCertificateConfigValidity ValidityInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity">CertificatesManagementCertificateCertificateConfigValidity</a>

---

##### `VersionNameInput`<sup>Optional</sup> <a name="VersionNameInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.versionNameInput"></a>

```csharp
public string VersionNameInput { get; }
```

- *Type:* string

---

##### `CertificateProfileType`<sup>Required</sup> <a name="CertificateProfileType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.certificateProfileType"></a>

```csharp
public string CertificateProfileType { get; }
```

- *Type:* string

---

##### `ConfigType`<sup>Required</sup> <a name="ConfigType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.configType"></a>

```csharp
public string ConfigType { get; }
```

- *Type:* string

---

##### `CsrPem`<sup>Required</sup> <a name="CsrPem" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.csrPem"></a>

```csharp
public string CsrPem { get; }
```

- *Type:* string

---

##### `IssuerCertificateAuthorityId`<sup>Required</sup> <a name="IssuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.issuerCertificateAuthorityId"></a>

```csharp
public string IssuerCertificateAuthorityId { get; }
```

- *Type:* string

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.keyAlgorithm"></a>

```csharp
public string KeyAlgorithm { get; }
```

- *Type:* string

---

##### `SignatureAlgorithm`<sup>Required</sup> <a name="SignatureAlgorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.signatureAlgorithm"></a>

```csharp
public string SignatureAlgorithm { get; }
```

- *Type:* string

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.versionName"></a>

```csharp
public string VersionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.internalValue"></a>

```csharp
public CertificatesManagementCertificateCertificateConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a>

---


### CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList <a name="CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.get"></a>

```csharp
private CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference <a name="CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CertificatesManagementCertificateCertificateConfigSubjectOutputReference <a name="CertificatesManagementCertificateCertificateConfigSubjectOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateCertificateConfigSubjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetDistinguishedNameQualifier">ResetDistinguishedNameQualifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetDomainComponent">ResetDomainComponent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetGenerationQualifier">ResetGenerationQualifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetGivenName">ResetGivenName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetInitials">ResetInitials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetLocalityName">ResetLocalityName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetOrganizationalUnit">ResetOrganizationalUnit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetPseudonym">ResetPseudonym</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetSerialNumber">ResetSerialNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetStateOrProvinceName">ResetStateOrProvinceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetStreet">ResetStreet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetSurname">ResetSurname</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCountry` <a name="ResetCountry" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetCountry"></a>

```csharp
private void ResetCountry()
```

##### `ResetDistinguishedNameQualifier` <a name="ResetDistinguishedNameQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetDistinguishedNameQualifier"></a>

```csharp
private void ResetDistinguishedNameQualifier()
```

##### `ResetDomainComponent` <a name="ResetDomainComponent" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetDomainComponent"></a>

```csharp
private void ResetDomainComponent()
```

##### `ResetGenerationQualifier` <a name="ResetGenerationQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetGenerationQualifier"></a>

```csharp
private void ResetGenerationQualifier()
```

##### `ResetGivenName` <a name="ResetGivenName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetGivenName"></a>

```csharp
private void ResetGivenName()
```

##### `ResetInitials` <a name="ResetInitials" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetInitials"></a>

```csharp
private void ResetInitials()
```

##### `ResetLocalityName` <a name="ResetLocalityName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetLocalityName"></a>

```csharp
private void ResetLocalityName()
```

##### `ResetOrganization` <a name="ResetOrganization" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetOrganization"></a>

```csharp
private void ResetOrganization()
```

##### `ResetOrganizationalUnit` <a name="ResetOrganizationalUnit" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetOrganizationalUnit"></a>

```csharp
private void ResetOrganizationalUnit()
```

##### `ResetPseudonym` <a name="ResetPseudonym" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetPseudonym"></a>

```csharp
private void ResetPseudonym()
```

##### `ResetSerialNumber` <a name="ResetSerialNumber" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetSerialNumber"></a>

```csharp
private void ResetSerialNumber()
```

##### `ResetStateOrProvinceName` <a name="ResetStateOrProvinceName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetStateOrProvinceName"></a>

```csharp
private void ResetStateOrProvinceName()
```

##### `ResetStreet` <a name="ResetStreet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetStreet"></a>

```csharp
private void ResetStreet()
```

##### `ResetSurname` <a name="ResetSurname" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetSurname"></a>

```csharp
private void ResetSurname()
```

##### `ResetTitle` <a name="ResetTitle" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```

##### `ResetUserId` <a name="ResetUserId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetUserId"></a>

```csharp
private void ResetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.commonNameInput">CommonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.countryInput">CountryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.distinguishedNameQualifierInput">DistinguishedNameQualifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.domainComponentInput">DomainComponentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.generationQualifierInput">GenerationQualifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.givenNameInput">GivenNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.initialsInput">InitialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.localityNameInput">LocalityNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organizationalUnitInput">OrganizationalUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.pseudonymInput">PseudonymInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.serialNumberInput">SerialNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.stateOrProvinceNameInput">StateOrProvinceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.streetInput">StreetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.surnameInput">SurnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.commonName">CommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.distinguishedNameQualifier">DistinguishedNameQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.domainComponent">DomainComponent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.generationQualifier">GenerationQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.givenName">GivenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.initials">Initials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.localityName">LocalityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organizationalUnit">OrganizationalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.pseudonym">Pseudonym</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.serialNumber">SerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.stateOrProvinceName">StateOrProvinceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.street">Street</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.surname">Surname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject">CertificatesManagementCertificateCertificateConfigSubject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.commonNameInput"></a>

```csharp
public string CommonNameInput { get; }
```

- *Type:* string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.countryInput"></a>

```csharp
public string CountryInput { get; }
```

- *Type:* string

---

##### `DistinguishedNameQualifierInput`<sup>Optional</sup> <a name="DistinguishedNameQualifierInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.distinguishedNameQualifierInput"></a>

```csharp
public string DistinguishedNameQualifierInput { get; }
```

- *Type:* string

---

##### `DomainComponentInput`<sup>Optional</sup> <a name="DomainComponentInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.domainComponentInput"></a>

```csharp
public string DomainComponentInput { get; }
```

- *Type:* string

---

##### `GenerationQualifierInput`<sup>Optional</sup> <a name="GenerationQualifierInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.generationQualifierInput"></a>

```csharp
public string GenerationQualifierInput { get; }
```

- *Type:* string

---

##### `GivenNameInput`<sup>Optional</sup> <a name="GivenNameInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.givenNameInput"></a>

```csharp
public string GivenNameInput { get; }
```

- *Type:* string

---

##### `InitialsInput`<sup>Optional</sup> <a name="InitialsInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.initialsInput"></a>

```csharp
public string InitialsInput { get; }
```

- *Type:* string

---

##### `LocalityNameInput`<sup>Optional</sup> <a name="LocalityNameInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.localityNameInput"></a>

```csharp
public string LocalityNameInput { get; }
```

- *Type:* string

---

##### `OrganizationalUnitInput`<sup>Optional</sup> <a name="OrganizationalUnitInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organizationalUnitInput"></a>

```csharp
public string OrganizationalUnitInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `PseudonymInput`<sup>Optional</sup> <a name="PseudonymInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.pseudonymInput"></a>

```csharp
public string PseudonymInput { get; }
```

- *Type:* string

---

##### `SerialNumberInput`<sup>Optional</sup> <a name="SerialNumberInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.serialNumberInput"></a>

```csharp
public string SerialNumberInput { get; }
```

- *Type:* string

---

##### `StateOrProvinceNameInput`<sup>Optional</sup> <a name="StateOrProvinceNameInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.stateOrProvinceNameInput"></a>

```csharp
public string StateOrProvinceNameInput { get; }
```

- *Type:* string

---

##### `StreetInput`<sup>Optional</sup> <a name="StreetInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.streetInput"></a>

```csharp
public string StreetInput { get; }
```

- *Type:* string

---

##### `SurnameInput`<sup>Optional</sup> <a name="SurnameInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.surnameInput"></a>

```csharp
public string SurnameInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.commonName"></a>

```csharp
public string CommonName { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `DistinguishedNameQualifier`<sup>Required</sup> <a name="DistinguishedNameQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.distinguishedNameQualifier"></a>

```csharp
public string DistinguishedNameQualifier { get; }
```

- *Type:* string

---

##### `DomainComponent`<sup>Required</sup> <a name="DomainComponent" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.domainComponent"></a>

```csharp
public string DomainComponent { get; }
```

- *Type:* string

---

##### `GenerationQualifier`<sup>Required</sup> <a name="GenerationQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.generationQualifier"></a>

```csharp
public string GenerationQualifier { get; }
```

- *Type:* string

---

##### `GivenName`<sup>Required</sup> <a name="GivenName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.givenName"></a>

```csharp
public string GivenName { get; }
```

- *Type:* string

---

##### `Initials`<sup>Required</sup> <a name="Initials" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.initials"></a>

```csharp
public string Initials { get; }
```

- *Type:* string

---

##### `LocalityName`<sup>Required</sup> <a name="LocalityName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.localityName"></a>

```csharp
public string LocalityName { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `OrganizationalUnit`<sup>Required</sup> <a name="OrganizationalUnit" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organizationalUnit"></a>

```csharp
public string OrganizationalUnit { get; }
```

- *Type:* string

---

##### `Pseudonym`<sup>Required</sup> <a name="Pseudonym" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.pseudonym"></a>

```csharp
public string Pseudonym { get; }
```

- *Type:* string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.serialNumber"></a>

```csharp
public string SerialNumber { get; }
```

- *Type:* string

---

##### `StateOrProvinceName`<sup>Required</sup> <a name="StateOrProvinceName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.stateOrProvinceName"></a>

```csharp
public string StateOrProvinceName { get; }
```

- *Type:* string

---

##### `Street`<sup>Required</sup> <a name="Street" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.street"></a>

```csharp
public string Street { get; }
```

- *Type:* string

---

##### `Surname`<sup>Required</sup> <a name="Surname" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.surname"></a>

```csharp
public string Surname { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.internalValue"></a>

```csharp
public CertificatesManagementCertificateCertificateConfigSubject InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject">CertificatesManagementCertificateCertificateConfigSubject</a>

---


### CertificatesManagementCertificateCertificateConfigValidityOutputReference <a name="CertificatesManagementCertificateCertificateConfigValidityOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateCertificateConfigValidityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.resetTimeOfValidityNotBefore">ResetTimeOfValidityNotBefore</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeOfValidityNotBefore` <a name="ResetTimeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.resetTimeOfValidityNotBefore"></a>

```csharp
private void ResetTimeOfValidityNotBefore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotAfterInput">TimeOfValidityNotAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotBeforeInput">TimeOfValidityNotBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotAfter">TimeOfValidityNotAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotBefore">TimeOfValidityNotBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity">CertificatesManagementCertificateCertificateConfigValidity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeOfValidityNotAfterInput`<sup>Optional</sup> <a name="TimeOfValidityNotAfterInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotAfterInput"></a>

```csharp
public string TimeOfValidityNotAfterInput { get; }
```

- *Type:* string

---

##### `TimeOfValidityNotBeforeInput`<sup>Optional</sup> <a name="TimeOfValidityNotBeforeInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotBeforeInput"></a>

```csharp
public string TimeOfValidityNotBeforeInput { get; }
```

- *Type:* string

---

##### `TimeOfValidityNotAfter`<sup>Required</sup> <a name="TimeOfValidityNotAfter" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotAfter"></a>

```csharp
public string TimeOfValidityNotAfter { get; }
```

- *Type:* string

---

##### `TimeOfValidityNotBefore`<sup>Required</sup> <a name="TimeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotBefore"></a>

```csharp
public string TimeOfValidityNotBefore { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.internalValue"></a>

```csharp
public CertificatesManagementCertificateCertificateConfigValidity InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity">CertificatesManagementCertificateCertificateConfigValidity</a>

---


### CertificatesManagementCertificateCertificateRevocationListDetailsList <a name="CertificatesManagementCertificateCertificateRevocationListDetailsList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateCertificateRevocationListDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.get"></a>

```csharp
private CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList <a name="CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.get"></a>

```csharp
private CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference <a name="CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageBucketName">ObjectStorageBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageNamespace">ObjectStorageNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageObjectNameFormat">ObjectStorageObjectNameFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig">CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectStorageBucketName`<sup>Required</sup> <a name="ObjectStorageBucketName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageBucketName"></a>

```csharp
public string ObjectStorageBucketName { get; }
```

- *Type:* string

---

##### `ObjectStorageNamespace`<sup>Required</sup> <a name="ObjectStorageNamespace" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageNamespace"></a>

```csharp
public string ObjectStorageNamespace { get; }
```

- *Type:* string

---

##### `ObjectStorageObjectNameFormat`<sup>Required</sup> <a name="ObjectStorageObjectNameFormat" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageObjectNameFormat"></a>

```csharp
public string ObjectStorageObjectNameFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.internalValue"></a>

```csharp
public CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig">CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig</a>

---


### CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference <a name="CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.customFormattedUrls">CustomFormattedUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.objectStorageConfig">ObjectStorageConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList">CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetails">CertificatesManagementCertificateCertificateRevocationListDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomFormattedUrls`<sup>Required</sup> <a name="CustomFormattedUrls" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.customFormattedUrls"></a>

```csharp
public string[] CustomFormattedUrls { get; }
```

- *Type:* string[]

---

##### `ObjectStorageConfig`<sup>Required</sup> <a name="ObjectStorageConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.objectStorageConfig"></a>

```csharp
public CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList ObjectStorageConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList">CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.internalValue"></a>

```csharp
public CertificatesManagementCertificateCertificateRevocationListDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetails">CertificatesManagementCertificateCertificateRevocationListDetails</a>

---


### CertificatesManagementCertificateCertificateRulesList <a name="CertificatesManagementCertificateCertificateRulesList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateCertificateRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.get"></a>

```csharp
private CertificatesManagementCertificateCertificateRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CertificatesManagementCertificateCertificateRulesOutputReference <a name="CertificatesManagementCertificateCertificateRulesOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateCertificateRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.advanceRenewalPeriodInput">AdvanceRenewalPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.renewalIntervalInput">RenewalIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.ruleTypeInput">RuleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.advanceRenewalPeriod">AdvanceRenewalPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.renewalInterval">RenewalInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.ruleType">RuleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdvanceRenewalPeriodInput`<sup>Optional</sup> <a name="AdvanceRenewalPeriodInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.advanceRenewalPeriodInput"></a>

```csharp
public string AdvanceRenewalPeriodInput { get; }
```

- *Type:* string

---

##### `RenewalIntervalInput`<sup>Optional</sup> <a name="RenewalIntervalInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.renewalIntervalInput"></a>

```csharp
public string RenewalIntervalInput { get; }
```

- *Type:* string

---

##### `RuleTypeInput`<sup>Optional</sup> <a name="RuleTypeInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.ruleTypeInput"></a>

```csharp
public string RuleTypeInput { get; }
```

- *Type:* string

---

##### `AdvanceRenewalPeriod`<sup>Required</sup> <a name="AdvanceRenewalPeriod" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.advanceRenewalPeriod"></a>

```csharp
public string AdvanceRenewalPeriod { get; }
```

- *Type:* string

---

##### `RenewalInterval`<sup>Required</sup> <a name="RenewalInterval" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.renewalInterval"></a>

```csharp
public string RenewalInterval { get; }
```

- *Type:* string

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.ruleType"></a>

```csharp
public string RuleType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CertificatesManagementCertificateCurrentVersionList <a name="CertificatesManagementCertificateCurrentVersionList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateCurrentVersionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.get"></a>

```csharp
private CertificatesManagementCertificateCurrentVersionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CertificatesManagementCertificateCurrentVersionOutputReference <a name="CertificatesManagementCertificateCurrentVersionOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateCurrentVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.issuerCaVersionNumber">IssuerCaVersionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.revocationStatus">RevocationStatus</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList">CertificatesManagementCertificateCurrentVersionRevocationStatusList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.serialNumber">SerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.stages">Stages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList">CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.timeOfDeletion">TimeOfDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.validity">Validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList">CertificatesManagementCertificateCurrentVersionValidityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.versionName">VersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.versionNumber">VersionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersion">CertificatesManagementCertificateCurrentVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `IssuerCaVersionNumber`<sup>Required</sup> <a name="IssuerCaVersionNumber" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.issuerCaVersionNumber"></a>

```csharp
public string IssuerCaVersionNumber { get; }
```

- *Type:* string

---

##### `RevocationStatus`<sup>Required</sup> <a name="RevocationStatus" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.revocationStatus"></a>

```csharp
public CertificatesManagementCertificateCurrentVersionRevocationStatusList RevocationStatus { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList">CertificatesManagementCertificateCurrentVersionRevocationStatusList</a>

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.serialNumber"></a>

```csharp
public string SerialNumber { get; }
```

- *Type:* string

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.stages"></a>

```csharp
public string[] Stages { get; }
```

- *Type:* string[]

---

##### `SubjectAlternativeNames`<sup>Required</sup> <a name="SubjectAlternativeNames" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.subjectAlternativeNames"></a>

```csharp
public CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList SubjectAlternativeNames { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList">CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeOfDeletion`<sup>Required</sup> <a name="TimeOfDeletion" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.timeOfDeletion"></a>

```csharp
public string TimeOfDeletion { get; }
```

- *Type:* string

---

##### `Validity`<sup>Required</sup> <a name="Validity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.validity"></a>

```csharp
public CertificatesManagementCertificateCurrentVersionValidityList Validity { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList">CertificatesManagementCertificateCurrentVersionValidityList</a>

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.versionName"></a>

```csharp
public string VersionName { get; }
```

- *Type:* string

---

##### `VersionNumber`<sup>Required</sup> <a name="VersionNumber" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.versionNumber"></a>

```csharp
public string VersionNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.internalValue"></a>

```csharp
public CertificatesManagementCertificateCurrentVersion InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersion">CertificatesManagementCertificateCurrentVersion</a>

---


### CertificatesManagementCertificateCurrentVersionRevocationStatusList <a name="CertificatesManagementCertificateCurrentVersionRevocationStatusList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateCurrentVersionRevocationStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.get"></a>

```csharp
private CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference <a name="CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.revocationReason">RevocationReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.timeOfRevocation">TimeOfRevocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatus">CertificatesManagementCertificateCurrentVersionRevocationStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RevocationReason`<sup>Required</sup> <a name="RevocationReason" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.revocationReason"></a>

```csharp
public string RevocationReason { get; }
```

- *Type:* string

---

##### `TimeOfRevocation`<sup>Required</sup> <a name="TimeOfRevocation" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.timeOfRevocation"></a>

```csharp
public string TimeOfRevocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.internalValue"></a>

```csharp
public CertificatesManagementCertificateCurrentVersionRevocationStatus InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatus">CertificatesManagementCertificateCurrentVersionRevocationStatus</a>

---


### CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList <a name="CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.get"></a>

```csharp
private CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference <a name="CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames">CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```csharp
public CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames">CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames</a>

---


### CertificatesManagementCertificateCurrentVersionValidityList <a name="CertificatesManagementCertificateCurrentVersionValidityList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateCurrentVersionValidityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.get"></a>

```csharp
private CertificatesManagementCertificateCurrentVersionValidityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CertificatesManagementCertificateCurrentVersionValidityOutputReference <a name="CertificatesManagementCertificateCurrentVersionValidityOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateCurrentVersionValidityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.timeOfValidityNotAfter">TimeOfValidityNotAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.timeOfValidityNotBefore">TimeOfValidityNotBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidity">CertificatesManagementCertificateCurrentVersionValidity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeOfValidityNotAfter`<sup>Required</sup> <a name="TimeOfValidityNotAfter" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.timeOfValidityNotAfter"></a>

```csharp
public string TimeOfValidityNotAfter { get; }
```

- *Type:* string

---

##### `TimeOfValidityNotBefore`<sup>Required</sup> <a name="TimeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.timeOfValidityNotBefore"></a>

```csharp
public string TimeOfValidityNotBefore { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.internalValue"></a>

```csharp
public CertificatesManagementCertificateCurrentVersionValidity InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidity">CertificatesManagementCertificateCurrentVersionValidity</a>

---


### CertificatesManagementCertificateSubjectList <a name="CertificatesManagementCertificateSubjectList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateSubjectList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.get"></a>

```csharp
private CertificatesManagementCertificateSubjectOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CertificatesManagementCertificateSubjectOutputReference <a name="CertificatesManagementCertificateSubjectOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateSubjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.commonName">CommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.distinguishedNameQualifier">DistinguishedNameQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.domainComponent">DomainComponent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.generationQualifier">GenerationQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.givenName">GivenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.initials">Initials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.localityName">LocalityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.organizationalUnit">OrganizationalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.pseudonym">Pseudonym</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.serialNumber">SerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.stateOrProvinceName">StateOrProvinceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.street">Street</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.surname">Surname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubject">CertificatesManagementCertificateSubject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.commonName"></a>

```csharp
public string CommonName { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `DistinguishedNameQualifier`<sup>Required</sup> <a name="DistinguishedNameQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.distinguishedNameQualifier"></a>

```csharp
public string DistinguishedNameQualifier { get; }
```

- *Type:* string

---

##### `DomainComponent`<sup>Required</sup> <a name="DomainComponent" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.domainComponent"></a>

```csharp
public string DomainComponent { get; }
```

- *Type:* string

---

##### `GenerationQualifier`<sup>Required</sup> <a name="GenerationQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.generationQualifier"></a>

```csharp
public string GenerationQualifier { get; }
```

- *Type:* string

---

##### `GivenName`<sup>Required</sup> <a name="GivenName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.givenName"></a>

```csharp
public string GivenName { get; }
```

- *Type:* string

---

##### `Initials`<sup>Required</sup> <a name="Initials" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.initials"></a>

```csharp
public string Initials { get; }
```

- *Type:* string

---

##### `LocalityName`<sup>Required</sup> <a name="LocalityName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.localityName"></a>

```csharp
public string LocalityName { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `OrganizationalUnit`<sup>Required</sup> <a name="OrganizationalUnit" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.organizationalUnit"></a>

```csharp
public string OrganizationalUnit { get; }
```

- *Type:* string

---

##### `Pseudonym`<sup>Required</sup> <a name="Pseudonym" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.pseudonym"></a>

```csharp
public string Pseudonym { get; }
```

- *Type:* string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.serialNumber"></a>

```csharp
public string SerialNumber { get; }
```

- *Type:* string

---

##### `StateOrProvinceName`<sup>Required</sup> <a name="StateOrProvinceName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.stateOrProvinceName"></a>

```csharp
public string StateOrProvinceName { get; }
```

- *Type:* string

---

##### `Street`<sup>Required</sup> <a name="Street" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.street"></a>

```csharp
public string Street { get; }
```

- *Type:* string

---

##### `Surname`<sup>Required</sup> <a name="Surname" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.surname"></a>

```csharp
public string Surname { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.internalValue"></a>

```csharp
public CertificatesManagementCertificateSubject InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubject">CertificatesManagementCertificateSubject</a>

---


### CertificatesManagementCertificateTimeoutsOutputReference <a name="CertificatesManagementCertificateTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CertificatesManagementCertificateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



