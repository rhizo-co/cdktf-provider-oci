# `identityDomainsSocialIdentityProvider` Submodule <a name="`identityDomainsSocialIdentityProvider` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsSocialIdentityProvider <a name="IdentityDomainsSocialIdentityProvider" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider oci_identity_domains_social_identity_provider}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSocialIdentityProvider(Construct Scope, string Id, IdentityDomainsSocialIdentityProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig">IdentityDomainsSocialIdentityProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig">IdentityDomainsSocialIdentityProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.putJitProvAssignedGroups">PutJitProvAssignedGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.putRelayIdpParamMappings">PutRelayIdpParamMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetAccessTokenUrl">ResetAccessTokenUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetAdminScope">ResetAdminScope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetAuthzUrl">ResetAuthzUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetAutoRedirectEnabled">ResetAutoRedirectEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetClientCredentialInPayload">ResetClientCredentialInPayload</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetClockSkewInSeconds">ResetClockSkewInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetDiscoveryUrl">ResetDiscoveryUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetIconUrl">ResetIconUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetIdAttribute">ResetIdAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetJitProvAssignedGroups">ResetJitProvAssignedGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetJitProvGroupStaticListEnabled">ResetJitProvGroupStaticListEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetOcid">ResetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetProfileUrl">ResetProfileUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetRedirectUrl">ResetRedirectUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetRefreshTokenUrl">ResetRefreshTokenUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetRelayIdpParamMappings">ResetRelayIdpParamMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetSocialJitProvisioningEnabled">ResetSocialJitProvisioningEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutJitProvAssignedGroups` <a name="PutJitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.putJitProvAssignedGroups"></a>

```csharp
private void PutJitProvAssignedGroups(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.putJitProvAssignedGroups.parameter.value"></a>

- *Type:* object

---

##### `PutRelayIdpParamMappings` <a name="PutRelayIdpParamMappings" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.putRelayIdpParamMappings"></a>

```csharp
private void PutRelayIdpParamMappings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.putRelayIdpParamMappings.parameter.value"></a>

- *Type:* object

---

##### `PutTags` <a name="PutTags" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.putTags"></a>

```csharp
private void PutTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.putTags.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.putTimeouts"></a>

```csharp
private void PutTimeouts(IdentityDomainsSocialIdentityProviderTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeouts">IdentityDomainsSocialIdentityProviderTimeouts</a>

---

##### `ResetAccessTokenUrl` <a name="ResetAccessTokenUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetAccessTokenUrl"></a>

```csharp
private void ResetAccessTokenUrl()
```

##### `ResetAdminScope` <a name="ResetAdminScope" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetAdminScope"></a>

```csharp
private void ResetAdminScope()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetAuthzUrl` <a name="ResetAuthzUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetAuthzUrl"></a>

```csharp
private void ResetAuthzUrl()
```

##### `ResetAutoRedirectEnabled` <a name="ResetAutoRedirectEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetAutoRedirectEnabled"></a>

```csharp
private void ResetAutoRedirectEnabled()
```

##### `ResetClientCredentialInPayload` <a name="ResetClientCredentialInPayload" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetClientCredentialInPayload"></a>

```csharp
private void ResetClientCredentialInPayload()
```

##### `ResetClockSkewInSeconds` <a name="ResetClockSkewInSeconds" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetClockSkewInSeconds"></a>

```csharp
private void ResetClockSkewInSeconds()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDiscoveryUrl` <a name="ResetDiscoveryUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetDiscoveryUrl"></a>

```csharp
private void ResetDiscoveryUrl()
```

##### `ResetIconUrl` <a name="ResetIconUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetIconUrl"></a>

```csharp
private void ResetIconUrl()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdAttribute` <a name="ResetIdAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetIdAttribute"></a>

```csharp
private void ResetIdAttribute()
```

##### `ResetJitProvAssignedGroups` <a name="ResetJitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetJitProvAssignedGroups"></a>

```csharp
private void ResetJitProvAssignedGroups()
```

##### `ResetJitProvGroupStaticListEnabled` <a name="ResetJitProvGroupStaticListEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetJitProvGroupStaticListEnabled"></a>

```csharp
private void ResetJitProvGroupStaticListEnabled()
```

##### `ResetOcid` <a name="ResetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetOcid"></a>

```csharp
private void ResetOcid()
```

##### `ResetProfileUrl` <a name="ResetProfileUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetProfileUrl"></a>

```csharp
private void ResetProfileUrl()
```

##### `ResetRedirectUrl` <a name="ResetRedirectUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetRedirectUrl"></a>

```csharp
private void ResetRedirectUrl()
```

##### `ResetRefreshTokenUrl` <a name="ResetRefreshTokenUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetRefreshTokenUrl"></a>

```csharp
private void ResetRefreshTokenUrl()
```

##### `ResetRelayIdpParamMappings` <a name="ResetRelayIdpParamMappings" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetRelayIdpParamMappings"></a>

```csharp
private void ResetRelayIdpParamMappings()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetResourceTypeSchemaVersion"></a>

```csharp
private void ResetResourceTypeSchemaVersion()
```

##### `ResetScope` <a name="ResetScope" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetSocialJitProvisioningEnabled` <a name="ResetSocialJitProvisioningEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetSocialJitProvisioningEnabled"></a>

```csharp
private void ResetSocialJitProvisioningEnabled()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainsSocialIdentityProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsSocialIdentityProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsSocialIdentityProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsSocialIdentityProvider.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsSocialIdentityProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IdentityDomainsSocialIdentityProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityDomainsSocialIdentityProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityDomainsSocialIdentityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsSocialIdentityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.compartmentOcid">CompartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.deleteInProgress">DeleteInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.domainOcid">DomainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList">IdentityDomainsSocialIdentityProviderIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList">IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.jitProvAssignedGroups">JitProvAssignedGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList">IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList">IdentityDomainsSocialIdentityProviderMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.relayIdpParamMappings">RelayIdpParamMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList">IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList">IdentityDomainsSocialIdentityProviderTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.tenancyOcid">TenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference">IdentityDomainsSocialIdentityProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.accessTokenUrlInput">AccessTokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.accountLinkingEnabledInput">AccountLinkingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.adminScopeInput">AdminScopeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.authzUrlInput">AuthzUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.autoRedirectEnabledInput">AutoRedirectEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.clientCredentialInPayloadInput">ClientCredentialInPayloadInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.clockSkewInSecondsInput">ClockSkewInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.consumerKeyInput">ConsumerKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.consumerSecretInput">ConsumerSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.discoveryUrlInput">DiscoveryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.iconUrlInput">IconUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idAttributeInput">IdAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.jitProvAssignedGroupsInput">JitProvAssignedGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.jitProvGroupStaticListEnabledInput">JitProvGroupStaticListEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.ocidInput">OcidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.profileUrlInput">ProfileUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.redirectUrlInput">RedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.refreshTokenUrlInput">RefreshTokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.registrationEnabledInput">RegistrationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.relayIdpParamMappingsInput">RelayIdpParamMappingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.schemasInput">SchemasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.scopeInput">ScopeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.serviceProviderNameInput">ServiceProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.showOnLoginInput">ShowOnLoginInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.socialJitProvisioningEnabledInput">SocialJitProvisioningEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.tagsInput">TagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.accessTokenUrl">AccessTokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.accountLinkingEnabled">AccountLinkingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.adminScope">AdminScope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.authzUrl">AuthzUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.autoRedirectEnabled">AutoRedirectEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.clientCredentialInPayload">ClientCredentialInPayload</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.clockSkewInSeconds">ClockSkewInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.consumerKey">ConsumerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.consumerSecret">ConsumerSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.discoveryUrl">DiscoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.iconUrl">IconUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idAttribute">IdAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.jitProvGroupStaticListEnabled">JitProvGroupStaticListEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.profileUrl">ProfileUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.redirectUrl">RedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.refreshTokenUrl">RefreshTokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.registrationEnabled">RegistrationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.scope">Scope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.serviceProviderName">ServiceProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.showOnLogin">ShowOnLogin</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.socialJitProvisioningEnabled">SocialJitProvisioningEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.compartmentOcid"></a>

```csharp
public string CompartmentOcid { get; }
```

- *Type:* string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.deleteInProgress"></a>

```csharp
public IResolvable DeleteInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.domainOcid"></a>

```csharp
public string DomainOcid { get; }
```

- *Type:* string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idcsCreatedBy"></a>

```csharp
public IdentityDomainsSocialIdentityProviderIdcsCreatedByList IdcsCreatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList">IdentityDomainsSocialIdentityProviderIdcsCreatedByList</a>

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idcsLastModifiedBy"></a>

```csharp
public IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList IdcsLastModifiedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList">IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idcsLastUpgradedInRelease"></a>

```csharp
public string IdcsLastUpgradedInRelease { get; }
```

- *Type:* string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idcsPreventedOperations"></a>

```csharp
public string[] IdcsPreventedOperations { get; }
```

- *Type:* string[]

---

##### `JitProvAssignedGroups`<sup>Required</sup> <a name="JitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.jitProvAssignedGroups"></a>

```csharp
public IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList JitProvAssignedGroups { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList">IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList</a>

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.meta"></a>

```csharp
public IdentityDomainsSocialIdentityProviderMetaList Meta { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList">IdentityDomainsSocialIdentityProviderMetaList</a>

---

##### `RelayIdpParamMappings`<sup>Required</sup> <a name="RelayIdpParamMappings" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.relayIdpParamMappings"></a>

```csharp
public IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList RelayIdpParamMappings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList">IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.tags"></a>

```csharp
public IdentityDomainsSocialIdentityProviderTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList">IdentityDomainsSocialIdentityProviderTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.tenancyOcid"></a>

```csharp
public string TenancyOcid { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.timeouts"></a>

```csharp
public IdentityDomainsSocialIdentityProviderTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference">IdentityDomainsSocialIdentityProviderTimeoutsOutputReference</a>

---

##### `AccessTokenUrlInput`<sup>Optional</sup> <a name="AccessTokenUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.accessTokenUrlInput"></a>

```csharp
public string AccessTokenUrlInput { get; }
```

- *Type:* string

---

##### `AccountLinkingEnabledInput`<sup>Optional</sup> <a name="AccountLinkingEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.accountLinkingEnabledInput"></a>

```csharp
public object AccountLinkingEnabledInput { get; }
```

- *Type:* object

---

##### `AdminScopeInput`<sup>Optional</sup> <a name="AdminScopeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.adminScopeInput"></a>

```csharp
public string[] AdminScopeInput { get; }
```

- *Type:* string[]

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `AuthzUrlInput`<sup>Optional</sup> <a name="AuthzUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.authzUrlInput"></a>

```csharp
public string AuthzUrlInput { get; }
```

- *Type:* string

---

##### `AutoRedirectEnabledInput`<sup>Optional</sup> <a name="AutoRedirectEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.autoRedirectEnabledInput"></a>

```csharp
public object AutoRedirectEnabledInput { get; }
```

- *Type:* object

---

##### `ClientCredentialInPayloadInput`<sup>Optional</sup> <a name="ClientCredentialInPayloadInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.clientCredentialInPayloadInput"></a>

```csharp
public object ClientCredentialInPayloadInput { get; }
```

- *Type:* object

---

##### `ClockSkewInSecondsInput`<sup>Optional</sup> <a name="ClockSkewInSecondsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.clockSkewInSecondsInput"></a>

```csharp
public double ClockSkewInSecondsInput { get; }
```

- *Type:* double

---

##### `ConsumerKeyInput`<sup>Optional</sup> <a name="ConsumerKeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.consumerKeyInput"></a>

```csharp
public string ConsumerKeyInput { get; }
```

- *Type:* string

---

##### `ConsumerSecretInput`<sup>Optional</sup> <a name="ConsumerSecretInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.consumerSecretInput"></a>

```csharp
public string ConsumerSecretInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DiscoveryUrlInput`<sup>Optional</sup> <a name="DiscoveryUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.discoveryUrlInput"></a>

```csharp
public string DiscoveryUrlInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IconUrlInput`<sup>Optional</sup> <a name="IconUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.iconUrlInput"></a>

```csharp
public string IconUrlInput { get; }
```

- *Type:* string

---

##### `IdAttributeInput`<sup>Optional</sup> <a name="IdAttributeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idAttributeInput"></a>

```csharp
public string IdAttributeInput { get; }
```

- *Type:* string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idcsEndpointInput"></a>

```csharp
public string IdcsEndpointInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `JitProvAssignedGroupsInput`<sup>Optional</sup> <a name="JitProvAssignedGroupsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.jitProvAssignedGroupsInput"></a>

```csharp
public object JitProvAssignedGroupsInput { get; }
```

- *Type:* object

---

##### `JitProvGroupStaticListEnabledInput`<sup>Optional</sup> <a name="JitProvGroupStaticListEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.jitProvGroupStaticListEnabledInput"></a>

```csharp
public object JitProvGroupStaticListEnabledInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OcidInput`<sup>Optional</sup> <a name="OcidInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.ocidInput"></a>

```csharp
public string OcidInput { get; }
```

- *Type:* string

---

##### `ProfileUrlInput`<sup>Optional</sup> <a name="ProfileUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.profileUrlInput"></a>

```csharp
public string ProfileUrlInput { get; }
```

- *Type:* string

---

##### `RedirectUrlInput`<sup>Optional</sup> <a name="RedirectUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.redirectUrlInput"></a>

```csharp
public string RedirectUrlInput { get; }
```

- *Type:* string

---

##### `RefreshTokenUrlInput`<sup>Optional</sup> <a name="RefreshTokenUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.refreshTokenUrlInput"></a>

```csharp
public string RefreshTokenUrlInput { get; }
```

- *Type:* string

---

##### `RegistrationEnabledInput`<sup>Optional</sup> <a name="RegistrationEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.registrationEnabledInput"></a>

```csharp
public object RegistrationEnabledInput { get; }
```

- *Type:* object

---

##### `RelayIdpParamMappingsInput`<sup>Optional</sup> <a name="RelayIdpParamMappingsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.relayIdpParamMappingsInput"></a>

```csharp
public object RelayIdpParamMappingsInput { get; }
```

- *Type:* object

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.resourceTypeSchemaVersionInput"></a>

```csharp
public string ResourceTypeSchemaVersionInput { get; }
```

- *Type:* string

---

##### `SchemasInput`<sup>Optional</sup> <a name="SchemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.schemasInput"></a>

```csharp
public string[] SchemasInput { get; }
```

- *Type:* string[]

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.scopeInput"></a>

```csharp
public string[] ScopeInput { get; }
```

- *Type:* string[]

---

##### `ServiceProviderNameInput`<sup>Optional</sup> <a name="ServiceProviderNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.serviceProviderNameInput"></a>

```csharp
public string ServiceProviderNameInput { get; }
```

- *Type:* string

---

##### `ShowOnLoginInput`<sup>Optional</sup> <a name="ShowOnLoginInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.showOnLoginInput"></a>

```csharp
public object ShowOnLoginInput { get; }
```

- *Type:* object

---

##### `SocialJitProvisioningEnabledInput`<sup>Optional</sup> <a name="SocialJitProvisioningEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.socialJitProvisioningEnabledInput"></a>

```csharp
public object SocialJitProvisioningEnabledInput { get; }
```

- *Type:* object

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.tagsInput"></a>

```csharp
public object TagsInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AccessTokenUrl`<sup>Required</sup> <a name="AccessTokenUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.accessTokenUrl"></a>

```csharp
public string AccessTokenUrl { get; }
```

- *Type:* string

---

##### `AccountLinkingEnabled`<sup>Required</sup> <a name="AccountLinkingEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.accountLinkingEnabled"></a>

```csharp
public object AccountLinkingEnabled { get; }
```

- *Type:* object

---

##### `AdminScope`<sup>Required</sup> <a name="AdminScope" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.adminScope"></a>

```csharp
public string[] AdminScope { get; }
```

- *Type:* string[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `AuthzUrl`<sup>Required</sup> <a name="AuthzUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.authzUrl"></a>

```csharp
public string AuthzUrl { get; }
```

- *Type:* string

---

##### `AutoRedirectEnabled`<sup>Required</sup> <a name="AutoRedirectEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.autoRedirectEnabled"></a>

```csharp
public object AutoRedirectEnabled { get; }
```

- *Type:* object

---

##### `ClientCredentialInPayload`<sup>Required</sup> <a name="ClientCredentialInPayload" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.clientCredentialInPayload"></a>

```csharp
public object ClientCredentialInPayload { get; }
```

- *Type:* object

---

##### `ClockSkewInSeconds`<sup>Required</sup> <a name="ClockSkewInSeconds" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.clockSkewInSeconds"></a>

```csharp
public double ClockSkewInSeconds { get; }
```

- *Type:* double

---

##### `ConsumerKey`<sup>Required</sup> <a name="ConsumerKey" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.consumerKey"></a>

```csharp
public string ConsumerKey { get; }
```

- *Type:* string

---

##### `ConsumerSecret`<sup>Required</sup> <a name="ConsumerSecret" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.consumerSecret"></a>

```csharp
public string ConsumerSecret { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DiscoveryUrl`<sup>Required</sup> <a name="DiscoveryUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.discoveryUrl"></a>

```csharp
public string DiscoveryUrl { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `IconUrl`<sup>Required</sup> <a name="IconUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.iconUrl"></a>

```csharp
public string IconUrl { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdAttribute`<sup>Required</sup> <a name="IdAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idAttribute"></a>

```csharp
public string IdAttribute { get; }
```

- *Type:* string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `JitProvGroupStaticListEnabled`<sup>Required</sup> <a name="JitProvGroupStaticListEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.jitProvGroupStaticListEnabled"></a>

```csharp
public object JitProvGroupStaticListEnabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `ProfileUrl`<sup>Required</sup> <a name="ProfileUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.profileUrl"></a>

```csharp
public string ProfileUrl { get; }
```

- *Type:* string

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.redirectUrl"></a>

```csharp
public string RedirectUrl { get; }
```

- *Type:* string

---

##### `RefreshTokenUrl`<sup>Required</sup> <a name="RefreshTokenUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.refreshTokenUrl"></a>

```csharp
public string RefreshTokenUrl { get; }
```

- *Type:* string

---

##### `RegistrationEnabled`<sup>Required</sup> <a name="RegistrationEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.registrationEnabled"></a>

```csharp
public object RegistrationEnabled { get; }
```

- *Type:* object

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.scope"></a>

```csharp
public string[] Scope { get; }
```

- *Type:* string[]

---

##### `ServiceProviderName`<sup>Required</sup> <a name="ServiceProviderName" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.serviceProviderName"></a>

```csharp
public string ServiceProviderName { get; }
```

- *Type:* string

---

##### `ShowOnLogin`<sup>Required</sup> <a name="ShowOnLogin" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.showOnLogin"></a>

```csharp
public object ShowOnLogin { get; }
```

- *Type:* object

---

##### `SocialJitProvisioningEnabled`<sup>Required</sup> <a name="SocialJitProvisioningEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.socialJitProvisioningEnabled"></a>

```csharp
public object SocialJitProvisioningEnabled { get; }
```

- *Type:* object

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsSocialIdentityProviderConfig <a name="IdentityDomainsSocialIdentityProviderConfig" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSocialIdentityProviderConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object AccountLinkingEnabled,
    string ConsumerKey,
    string ConsumerSecret,
    object Enabled,
    string IdcsEndpoint,
    string Name,
    object RegistrationEnabled,
    string[] Schemas,
    string ServiceProviderName,
    object ShowOnLogin,
    string AccessTokenUrl = null,
    string[] AdminScope = null,
    string Authorization = null,
    string AuthzUrl = null,
    object AutoRedirectEnabled = null,
    object ClientCredentialInPayload = null,
    double ClockSkewInSeconds = null,
    string Description = null,
    string DiscoveryUrl = null,
    string IconUrl = null,
    string Id = null,
    string IdAttribute = null,
    object JitProvAssignedGroups = null,
    object JitProvGroupStaticListEnabled = null,
    string Ocid = null,
    string ProfileUrl = null,
    string RedirectUrl = null,
    string RefreshTokenUrl = null,
    object RelayIdpParamMappings = null,
    string ResourceTypeSchemaVersion = null,
    string[] Scope = null,
    object SocialJitProvisioningEnabled = null,
    string Status = null,
    object Tags = null,
    IdentityDomainsSocialIdentityProviderTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.accountLinkingEnabled">AccountLinkingEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#account_linking_enabled IdentityDomainsSocialIdentityProvider#account_linking_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.consumerKey">ConsumerKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#consumer_key IdentityDomainsSocialIdentityProvider#consumer_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.consumerSecret">ConsumerSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#consumer_secret IdentityDomainsSocialIdentityProvider#consumer_secret}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#enabled IdentityDomainsSocialIdentityProvider#enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#idcs_endpoint IdentityDomainsSocialIdentityProvider#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#name IdentityDomainsSocialIdentityProvider#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.registrationEnabled">RegistrationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#registration_enabled IdentityDomainsSocialIdentityProvider#registration_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.schemas">Schemas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#schemas IdentityDomainsSocialIdentityProvider#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.serviceProviderName">ServiceProviderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#service_provider_name IdentityDomainsSocialIdentityProvider#service_provider_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.showOnLogin">ShowOnLogin</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#show_on_login IdentityDomainsSocialIdentityProvider#show_on_login}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.accessTokenUrl">AccessTokenUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#access_token_url IdentityDomainsSocialIdentityProvider#access_token_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.adminScope">AdminScope</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#admin_scope IdentityDomainsSocialIdentityProvider#admin_scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#authorization IdentityDomainsSocialIdentityProvider#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.authzUrl">AuthzUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#authz_url IdentityDomainsSocialIdentityProvider#authz_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.autoRedirectEnabled">AutoRedirectEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#auto_redirect_enabled IdentityDomainsSocialIdentityProvider#auto_redirect_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.clientCredentialInPayload">ClientCredentialInPayload</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#client_credential_in_payload IdentityDomainsSocialIdentityProvider#client_credential_in_payload}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.clockSkewInSeconds">ClockSkewInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#clock_skew_in_seconds IdentityDomainsSocialIdentityProvider#clock_skew_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#description IdentityDomainsSocialIdentityProvider#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.discoveryUrl">DiscoveryUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#discovery_url IdentityDomainsSocialIdentityProvider#discovery_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.iconUrl">IconUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#icon_url IdentityDomainsSocialIdentityProvider#icon_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#id IdentityDomainsSocialIdentityProvider#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.idAttribute">IdAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#id_attribute IdentityDomainsSocialIdentityProvider#id_attribute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.jitProvAssignedGroups">JitProvAssignedGroups</a></code> | <code>object</code> | jit_prov_assigned_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.jitProvGroupStaticListEnabled">JitProvGroupStaticListEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#jit_prov_group_static_list_enabled IdentityDomainsSocialIdentityProvider#jit_prov_group_static_list_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.ocid">Ocid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#ocid IdentityDomainsSocialIdentityProvider#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.profileUrl">ProfileUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#profile_url IdentityDomainsSocialIdentityProvider#profile_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.redirectUrl">RedirectUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#redirect_url IdentityDomainsSocialIdentityProvider#redirect_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.refreshTokenUrl">RefreshTokenUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#refresh_token_url IdentityDomainsSocialIdentityProvider#refresh_token_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.relayIdpParamMappings">RelayIdpParamMappings</a></code> | <code>object</code> | relay_idp_param_mappings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#resource_type_schema_version IdentityDomainsSocialIdentityProvider#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.scope">Scope</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#scope IdentityDomainsSocialIdentityProvider#scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.socialJitProvisioningEnabled">SocialJitProvisioningEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#social_jit_provisioning_enabled IdentityDomainsSocialIdentityProvider#social_jit_provisioning_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#status IdentityDomainsSocialIdentityProvider#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.tags">Tags</a></code> | <code>object</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeouts">IdentityDomainsSocialIdentityProviderTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountLinkingEnabled`<sup>Required</sup> <a name="AccountLinkingEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.accountLinkingEnabled"></a>

```csharp
public object AccountLinkingEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#account_linking_enabled IdentityDomainsSocialIdentityProvider#account_linking_enabled}.

---

##### `ConsumerKey`<sup>Required</sup> <a name="ConsumerKey" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.consumerKey"></a>

```csharp
public string ConsumerKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#consumer_key IdentityDomainsSocialIdentityProvider#consumer_key}.

---

##### `ConsumerSecret`<sup>Required</sup> <a name="ConsumerSecret" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.consumerSecret"></a>

```csharp
public string ConsumerSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#consumer_secret IdentityDomainsSocialIdentityProvider#consumer_secret}.

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#enabled IdentityDomainsSocialIdentityProvider#enabled}.

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#idcs_endpoint IdentityDomainsSocialIdentityProvider#idcs_endpoint}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#name IdentityDomainsSocialIdentityProvider#name}.

---

##### `RegistrationEnabled`<sup>Required</sup> <a name="RegistrationEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.registrationEnabled"></a>

```csharp
public object RegistrationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#registration_enabled IdentityDomainsSocialIdentityProvider#registration_enabled}.

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.schemas"></a>

```csharp
public string[] Schemas { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#schemas IdentityDomainsSocialIdentityProvider#schemas}.

---

##### `ServiceProviderName`<sup>Required</sup> <a name="ServiceProviderName" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.serviceProviderName"></a>

```csharp
public string ServiceProviderName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#service_provider_name IdentityDomainsSocialIdentityProvider#service_provider_name}.

---

##### `ShowOnLogin`<sup>Required</sup> <a name="ShowOnLogin" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.showOnLogin"></a>

```csharp
public object ShowOnLogin { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#show_on_login IdentityDomainsSocialIdentityProvider#show_on_login}.

---

##### `AccessTokenUrl`<sup>Optional</sup> <a name="AccessTokenUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.accessTokenUrl"></a>

```csharp
public string AccessTokenUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#access_token_url IdentityDomainsSocialIdentityProvider#access_token_url}.

---

##### `AdminScope`<sup>Optional</sup> <a name="AdminScope" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.adminScope"></a>

```csharp
public string[] AdminScope { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#admin_scope IdentityDomainsSocialIdentityProvider#admin_scope}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#authorization IdentityDomainsSocialIdentityProvider#authorization}.

---

##### `AuthzUrl`<sup>Optional</sup> <a name="AuthzUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.authzUrl"></a>

```csharp
public string AuthzUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#authz_url IdentityDomainsSocialIdentityProvider#authz_url}.

---

##### `AutoRedirectEnabled`<sup>Optional</sup> <a name="AutoRedirectEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.autoRedirectEnabled"></a>

```csharp
public object AutoRedirectEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#auto_redirect_enabled IdentityDomainsSocialIdentityProvider#auto_redirect_enabled}.

---

##### `ClientCredentialInPayload`<sup>Optional</sup> <a name="ClientCredentialInPayload" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.clientCredentialInPayload"></a>

```csharp
public object ClientCredentialInPayload { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#client_credential_in_payload IdentityDomainsSocialIdentityProvider#client_credential_in_payload}.

---

##### `ClockSkewInSeconds`<sup>Optional</sup> <a name="ClockSkewInSeconds" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.clockSkewInSeconds"></a>

```csharp
public double ClockSkewInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#clock_skew_in_seconds IdentityDomainsSocialIdentityProvider#clock_skew_in_seconds}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#description IdentityDomainsSocialIdentityProvider#description}.

---

##### `DiscoveryUrl`<sup>Optional</sup> <a name="DiscoveryUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.discoveryUrl"></a>

```csharp
public string DiscoveryUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#discovery_url IdentityDomainsSocialIdentityProvider#discovery_url}.

---

##### `IconUrl`<sup>Optional</sup> <a name="IconUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.iconUrl"></a>

```csharp
public string IconUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#icon_url IdentityDomainsSocialIdentityProvider#icon_url}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#id IdentityDomainsSocialIdentityProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdAttribute`<sup>Optional</sup> <a name="IdAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.idAttribute"></a>

```csharp
public string IdAttribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#id_attribute IdentityDomainsSocialIdentityProvider#id_attribute}.

---

##### `JitProvAssignedGroups`<sup>Optional</sup> <a name="JitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.jitProvAssignedGroups"></a>

```csharp
public object JitProvAssignedGroups { get; set; }
```

- *Type:* object

jit_prov_assigned_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#jit_prov_assigned_groups IdentityDomainsSocialIdentityProvider#jit_prov_assigned_groups}

---

##### `JitProvGroupStaticListEnabled`<sup>Optional</sup> <a name="JitProvGroupStaticListEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.jitProvGroupStaticListEnabled"></a>

```csharp
public object JitProvGroupStaticListEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#jit_prov_group_static_list_enabled IdentityDomainsSocialIdentityProvider#jit_prov_group_static_list_enabled}.

---

##### `Ocid`<sup>Optional</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.ocid"></a>

```csharp
public string Ocid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#ocid IdentityDomainsSocialIdentityProvider#ocid}.

---

##### `ProfileUrl`<sup>Optional</sup> <a name="ProfileUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.profileUrl"></a>

```csharp
public string ProfileUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#profile_url IdentityDomainsSocialIdentityProvider#profile_url}.

---

##### `RedirectUrl`<sup>Optional</sup> <a name="RedirectUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.redirectUrl"></a>

```csharp
public string RedirectUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#redirect_url IdentityDomainsSocialIdentityProvider#redirect_url}.

---

##### `RefreshTokenUrl`<sup>Optional</sup> <a name="RefreshTokenUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.refreshTokenUrl"></a>

```csharp
public string RefreshTokenUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#refresh_token_url IdentityDomainsSocialIdentityProvider#refresh_token_url}.

---

##### `RelayIdpParamMappings`<sup>Optional</sup> <a name="RelayIdpParamMappings" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.relayIdpParamMappings"></a>

```csharp
public object RelayIdpParamMappings { get; set; }
```

- *Type:* object

relay_idp_param_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#relay_idp_param_mappings IdentityDomainsSocialIdentityProvider#relay_idp_param_mappings}

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#resource_type_schema_version IdentityDomainsSocialIdentityProvider#resource_type_schema_version}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.scope"></a>

```csharp
public string[] Scope { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#scope IdentityDomainsSocialIdentityProvider#scope}.

---

##### `SocialJitProvisioningEnabled`<sup>Optional</sup> <a name="SocialJitProvisioningEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.socialJitProvisioningEnabled"></a>

```csharp
public object SocialJitProvisioningEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#social_jit_provisioning_enabled IdentityDomainsSocialIdentityProvider#social_jit_provisioning_enabled}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#status IdentityDomainsSocialIdentityProvider#status}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.tags"></a>

```csharp
public object Tags { get; set; }
```

- *Type:* object

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#tags IdentityDomainsSocialIdentityProvider#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderConfig.property.timeouts"></a>

```csharp
public IdentityDomainsSocialIdentityProviderTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeouts">IdentityDomainsSocialIdentityProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#timeouts IdentityDomainsSocialIdentityProvider#timeouts}

---

### IdentityDomainsSocialIdentityProviderIdcsCreatedBy <a name="IdentityDomainsSocialIdentityProviderIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSocialIdentityProviderIdcsCreatedBy {

};
```


### IdentityDomainsSocialIdentityProviderIdcsLastModifiedBy <a name="IdentityDomainsSocialIdentityProviderIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSocialIdentityProviderIdcsLastModifiedBy {

};
```


### IdentityDomainsSocialIdentityProviderJitProvAssignedGroups <a name="IdentityDomainsSocialIdentityProviderJitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSocialIdentityProviderJitProvAssignedGroups {
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroups.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#value IdentityDomainsSocialIdentityProvider#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroups.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#value IdentityDomainsSocialIdentityProvider#value}.

---

### IdentityDomainsSocialIdentityProviderMeta <a name="IdentityDomainsSocialIdentityProviderMeta" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMeta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSocialIdentityProviderMeta {

};
```


### IdentityDomainsSocialIdentityProviderRelayIdpParamMappings <a name="IdentityDomainsSocialIdentityProviderRelayIdpParamMappings" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSocialIdentityProviderRelayIdpParamMappings {
    string RelayParamKey,
    string RelayParamValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappings.property.relayParamKey">RelayParamKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#relay_param_key IdentityDomainsSocialIdentityProvider#relay_param_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappings.property.relayParamValue">RelayParamValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#relay_param_value IdentityDomainsSocialIdentityProvider#relay_param_value}. |

---

##### `RelayParamKey`<sup>Required</sup> <a name="RelayParamKey" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappings.property.relayParamKey"></a>

```csharp
public string RelayParamKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#relay_param_key IdentityDomainsSocialIdentityProvider#relay_param_key}.

---

##### `RelayParamValue`<sup>Optional</sup> <a name="RelayParamValue" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappings.property.relayParamValue"></a>

```csharp
public string RelayParamValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#relay_param_value IdentityDomainsSocialIdentityProvider#relay_param_value}.

---

### IdentityDomainsSocialIdentityProviderTags <a name="IdentityDomainsSocialIdentityProviderTags" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSocialIdentityProviderTags {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#key IdentityDomainsSocialIdentityProvider#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#value IdentityDomainsSocialIdentityProvider#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#key IdentityDomainsSocialIdentityProvider#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#value IdentityDomainsSocialIdentityProvider#value}.

---

### IdentityDomainsSocialIdentityProviderTimeouts <a name="IdentityDomainsSocialIdentityProviderTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSocialIdentityProviderTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#create IdentityDomainsSocialIdentityProvider#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#delete IdentityDomainsSocialIdentityProvider#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#update IdentityDomainsSocialIdentityProvider#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#create IdentityDomainsSocialIdentityProvider#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#delete IdentityDomainsSocialIdentityProvider#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_social_identity_provider#update IdentityDomainsSocialIdentityProvider#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsSocialIdentityProviderIdcsCreatedByList <a name="IdentityDomainsSocialIdentityProviderIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSocialIdentityProviderIdcsCreatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.get"></a>

```csharp
private IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference <a name="IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedBy">IdentityDomainsSocialIdentityProviderIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsSocialIdentityProviderIdcsCreatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsCreatedBy">IdentityDomainsSocialIdentityProviderIdcsCreatedBy</a>

---


### IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList <a name="IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.get"></a>

```csharp
private IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference <a name="IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedBy">IdentityDomainsSocialIdentityProviderIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsSocialIdentityProviderIdcsLastModifiedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderIdcsLastModifiedBy">IdentityDomainsSocialIdentityProviderIdcsLastModifiedBy</a>

---


### IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList <a name="IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.get"></a>

```csharp
private IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference <a name="IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSocialIdentityProviderMetaList <a name="IdentityDomainsSocialIdentityProviderMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSocialIdentityProviderMetaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.get"></a>

```csharp
private IdentityDomainsSocialIdentityProviderMetaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsSocialIdentityProviderMetaOutputReference <a name="IdentityDomainsSocialIdentityProviderMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSocialIdentityProviderMetaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMeta">IdentityDomainsSocialIdentityProviderMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMetaOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsSocialIdentityProviderMeta InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderMeta">IdentityDomainsSocialIdentityProviderMeta</a>

---


### IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList <a name="IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.get"></a>

```csharp
private IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference <a name="IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.resetRelayParamValue">ResetRelayParamValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRelayParamValue` <a name="ResetRelayParamValue" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.resetRelayParamValue"></a>

```csharp
private void ResetRelayParamValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.relayParamKeyInput">RelayParamKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.relayParamValueInput">RelayParamValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.relayParamKey">RelayParamKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.relayParamValue">RelayParamValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RelayParamKeyInput`<sup>Optional</sup> <a name="RelayParamKeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.relayParamKeyInput"></a>

```csharp
public string RelayParamKeyInput { get; }
```

- *Type:* string

---

##### `RelayParamValueInput`<sup>Optional</sup> <a name="RelayParamValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.relayParamValueInput"></a>

```csharp
public string RelayParamValueInput { get; }
```

- *Type:* string

---

##### `RelayParamKey`<sup>Required</sup> <a name="RelayParamKey" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.relayParamKey"></a>

```csharp
public string RelayParamKey { get; }
```

- *Type:* string

---

##### `RelayParamValue`<sup>Required</sup> <a name="RelayParamValue" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.relayParamValue"></a>

```csharp
public string RelayParamValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSocialIdentityProviderTagsList <a name="IdentityDomainsSocialIdentityProviderTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSocialIdentityProviderTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.get"></a>

```csharp
private IdentityDomainsSocialIdentityProviderTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSocialIdentityProviderTagsOutputReference <a name="IdentityDomainsSocialIdentityProviderTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSocialIdentityProviderTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSocialIdentityProviderTimeoutsOutputReference <a name="IdentityDomainsSocialIdentityProviderTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSocialIdentityProviderTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSocialIdentityProvider.IdentityDomainsSocialIdentityProviderTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



