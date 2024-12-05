# `identityDomainsIdentityPropagationTrust` Submodule <a name="`identityDomainsIdentityPropagationTrust` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsIdentityPropagationTrust <a name="IdentityDomainsIdentityPropagationTrust" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust oci_identity_domains_identity_propagation_trust}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityPropagationTrust(Construct Scope, string Id, IdentityDomainsIdentityPropagationTrustConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig">IdentityDomainsIdentityPropagationTrustConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig">IdentityDomainsIdentityPropagationTrustConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putImpersonationServiceUsers">PutImpersonationServiceUsers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putKeytab">PutKeytab</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetAllowImpersonation">ResetAllowImpersonation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetClientClaimName">ResetClientClaimName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetClientClaimValues">ResetClientClaimValues</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetClockSkewSeconds">ResetClockSkewSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetImpersonationServiceUsers">ResetImpersonationServiceUsers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetKeytab">ResetKeytab</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetOauthClients">ResetOauthClients</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetOcid">ResetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetPublicCertificate">ResetPublicCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetPublicKeyEndpoint">ResetPublicKeyEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetSubjectClaimName">ResetSubjectClaimName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetSubjectMappingAttribute">ResetSubjectMappingAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetSubjectType">ResetSubjectType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutImpersonationServiceUsers` <a name="PutImpersonationServiceUsers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putImpersonationServiceUsers"></a>

```csharp
private void PutImpersonationServiceUsers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putImpersonationServiceUsers.parameter.value"></a>

- *Type:* object

---

##### `PutKeytab` <a name="PutKeytab" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putKeytab"></a>

```csharp
private void PutKeytab(IdentityDomainsIdentityPropagationTrustKeytab Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putKeytab.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab">IdentityDomainsIdentityPropagationTrustKeytab</a>

---

##### `PutTags` <a name="PutTags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putTags"></a>

```csharp
private void PutTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putTags.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putTimeouts"></a>

```csharp
private void PutTimeouts(IdentityDomainsIdentityPropagationTrustTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts">IdentityDomainsIdentityPropagationTrustTimeouts</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetActive` <a name="ResetActive" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetActive"></a>

```csharp
private void ResetActive()
```

##### `ResetAllowImpersonation` <a name="ResetAllowImpersonation" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetAllowImpersonation"></a>

```csharp
private void ResetAllowImpersonation()
```

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetAttributeSets"></a>

```csharp
private void ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetClientClaimName` <a name="ResetClientClaimName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetClientClaimName"></a>

```csharp
private void ResetClientClaimName()
```

##### `ResetClientClaimValues` <a name="ResetClientClaimValues" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetClientClaimValues"></a>

```csharp
private void ResetClientClaimValues()
```

##### `ResetClockSkewSeconds` <a name="ResetClockSkewSeconds" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetClockSkewSeconds"></a>

```csharp
private void ResetClockSkewSeconds()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetImpersonationServiceUsers` <a name="ResetImpersonationServiceUsers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetImpersonationServiceUsers"></a>

```csharp
private void ResetImpersonationServiceUsers()
```

##### `ResetKeytab` <a name="ResetKeytab" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetKeytab"></a>

```csharp
private void ResetKeytab()
```

##### `ResetOauthClients` <a name="ResetOauthClients" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetOauthClients"></a>

```csharp
private void ResetOauthClients()
```

##### `ResetOcid` <a name="ResetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetOcid"></a>

```csharp
private void ResetOcid()
```

##### `ResetPublicCertificate` <a name="ResetPublicCertificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetPublicCertificate"></a>

```csharp
private void ResetPublicCertificate()
```

##### `ResetPublicKeyEndpoint` <a name="ResetPublicKeyEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetPublicKeyEndpoint"></a>

```csharp
private void ResetPublicKeyEndpoint()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetResourceTypeSchemaVersion"></a>

```csharp
private void ResetResourceTypeSchemaVersion()
```

##### `ResetSubjectClaimName` <a name="ResetSubjectClaimName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetSubjectClaimName"></a>

```csharp
private void ResetSubjectClaimName()
```

##### `ResetSubjectMappingAttribute` <a name="ResetSubjectMappingAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetSubjectMappingAttribute"></a>

```csharp
private void ResetSubjectMappingAttribute()
```

##### `ResetSubjectType` <a name="ResetSubjectType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetSubjectType"></a>

```csharp
private void ResetSubjectType()
```

##### `ResetTags` <a name="ResetTags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainsIdentityPropagationTrust resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsIdentityPropagationTrust.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsIdentityPropagationTrust.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsIdentityPropagationTrust.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsIdentityPropagationTrust.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IdentityDomainsIdentityPropagationTrust resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityDomainsIdentityPropagationTrust to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityDomainsIdentityPropagationTrust that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsIdentityPropagationTrust to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.compartmentOcid">CompartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.deleteInProgress">DeleteInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.domainOcid">DomainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList">IdentityDomainsIdentityPropagationTrustIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList">IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.impersonationServiceUsers">ImpersonationServiceUsers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList">IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.keytab">Keytab</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference">IdentityDomainsIdentityPropagationTrustKeytabOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList">IdentityDomainsIdentityPropagationTrustMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList">IdentityDomainsIdentityPropagationTrustTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.tenancyOcid">TenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference">IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.activeInput">ActiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.allowImpersonationInput">AllowImpersonationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.attributesInput">AttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clientClaimNameInput">ClientClaimNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clientClaimValuesInput">ClientClaimValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clockSkewSecondsInput">ClockSkewSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.impersonationServiceUsersInput">ImpersonationServiceUsersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.keytabInput">KeytabInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab">IdentityDomainsIdentityPropagationTrustKeytab</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.oauthClientsInput">OauthClientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.ocidInput">OcidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.publicCertificateInput">PublicCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.publicKeyEndpointInput">PublicKeyEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.schemasInput">SchemasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectClaimNameInput">SubjectClaimNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectMappingAttributeInput">SubjectMappingAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectTypeInput">SubjectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.tagsInput">TagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.active">Active</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.allowImpersonation">AllowImpersonation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.attributes">Attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clientClaimName">ClientClaimName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clientClaimValues">ClientClaimValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clockSkewSeconds">ClockSkewSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.oauthClients">OauthClients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.publicCertificate">PublicCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.publicKeyEndpoint">PublicKeyEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectClaimName">SubjectClaimName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectMappingAttribute">SubjectMappingAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectType">SubjectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.compartmentOcid"></a>

```csharp
public string CompartmentOcid { get; }
```

- *Type:* string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.deleteInProgress"></a>

```csharp
public IResolvable DeleteInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.domainOcid"></a>

```csharp
public string DomainOcid { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsCreatedBy"></a>

```csharp
public IdentityDomainsIdentityPropagationTrustIdcsCreatedByList IdcsCreatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList">IdentityDomainsIdentityPropagationTrustIdcsCreatedByList</a>

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsLastModifiedBy"></a>

```csharp
public IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList IdcsLastModifiedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList">IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsLastUpgradedInRelease"></a>

```csharp
public string IdcsLastUpgradedInRelease { get; }
```

- *Type:* string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsPreventedOperations"></a>

```csharp
public string[] IdcsPreventedOperations { get; }
```

- *Type:* string[]

---

##### `ImpersonationServiceUsers`<sup>Required</sup> <a name="ImpersonationServiceUsers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.impersonationServiceUsers"></a>

```csharp
public IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList ImpersonationServiceUsers { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList">IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList</a>

---

##### `Keytab`<sup>Required</sup> <a name="Keytab" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.keytab"></a>

```csharp
public IdentityDomainsIdentityPropagationTrustKeytabOutputReference Keytab { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference">IdentityDomainsIdentityPropagationTrustKeytabOutputReference</a>

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.meta"></a>

```csharp
public IdentityDomainsIdentityPropagationTrustMetaList Meta { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList">IdentityDomainsIdentityPropagationTrustMetaList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.tags"></a>

```csharp
public IdentityDomainsIdentityPropagationTrustTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList">IdentityDomainsIdentityPropagationTrustTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.tenancyOcid"></a>

```csharp
public string TenancyOcid { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.timeouts"></a>

```csharp
public IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference">IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.activeInput"></a>

```csharp
public object ActiveInput { get; }
```

- *Type:* object

---

##### `AllowImpersonationInput`<sup>Optional</sup> <a name="AllowImpersonationInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.allowImpersonationInput"></a>

```csharp
public object AllowImpersonationInput { get; }
```

- *Type:* object

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.attributeSetsInput"></a>

```csharp
public string[] AttributeSetsInput { get; }
```

- *Type:* string[]

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.attributesInput"></a>

```csharp
public string AttributesInput { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `ClientClaimNameInput`<sup>Optional</sup> <a name="ClientClaimNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clientClaimNameInput"></a>

```csharp
public string ClientClaimNameInput { get; }
```

- *Type:* string

---

##### `ClientClaimValuesInput`<sup>Optional</sup> <a name="ClientClaimValuesInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clientClaimValuesInput"></a>

```csharp
public string[] ClientClaimValuesInput { get; }
```

- *Type:* string[]

---

##### `ClockSkewSecondsInput`<sup>Optional</sup> <a name="ClockSkewSecondsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clockSkewSecondsInput"></a>

```csharp
public double ClockSkewSecondsInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsEndpointInput"></a>

```csharp
public string IdcsEndpointInput { get; }
```

- *Type:* string

---

##### `ImpersonationServiceUsersInput`<sup>Optional</sup> <a name="ImpersonationServiceUsersInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.impersonationServiceUsersInput"></a>

```csharp
public object ImpersonationServiceUsersInput { get; }
```

- *Type:* object

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `KeytabInput`<sup>Optional</sup> <a name="KeytabInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.keytabInput"></a>

```csharp
public IdentityDomainsIdentityPropagationTrustKeytab KeytabInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab">IdentityDomainsIdentityPropagationTrustKeytab</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OauthClientsInput`<sup>Optional</sup> <a name="OauthClientsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.oauthClientsInput"></a>

```csharp
public string[] OauthClientsInput { get; }
```

- *Type:* string[]

---

##### `OcidInput`<sup>Optional</sup> <a name="OcidInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.ocidInput"></a>

```csharp
public string OcidInput { get; }
```

- *Type:* string

---

##### `PublicCertificateInput`<sup>Optional</sup> <a name="PublicCertificateInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.publicCertificateInput"></a>

```csharp
public string PublicCertificateInput { get; }
```

- *Type:* string

---

##### `PublicKeyEndpointInput`<sup>Optional</sup> <a name="PublicKeyEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.publicKeyEndpointInput"></a>

```csharp
public string PublicKeyEndpointInput { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.resourceTypeSchemaVersionInput"></a>

```csharp
public string ResourceTypeSchemaVersionInput { get; }
```

- *Type:* string

---

##### `SchemasInput`<sup>Optional</sup> <a name="SchemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.schemasInput"></a>

```csharp
public string[] SchemasInput { get; }
```

- *Type:* string[]

---

##### `SubjectClaimNameInput`<sup>Optional</sup> <a name="SubjectClaimNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectClaimNameInput"></a>

```csharp
public string SubjectClaimNameInput { get; }
```

- *Type:* string

---

##### `SubjectMappingAttributeInput`<sup>Optional</sup> <a name="SubjectMappingAttributeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectMappingAttributeInput"></a>

```csharp
public string SubjectMappingAttributeInput { get; }
```

- *Type:* string

---

##### `SubjectTypeInput`<sup>Optional</sup> <a name="SubjectTypeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectTypeInput"></a>

```csharp
public string SubjectTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.tagsInput"></a>

```csharp
public object TagsInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Active`<sup>Required</sup> <a name="Active" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.active"></a>

```csharp
public object Active { get; }
```

- *Type:* object

---

##### `AllowImpersonation`<sup>Required</sup> <a name="AllowImpersonation" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.allowImpersonation"></a>

```csharp
public object AllowImpersonation { get; }
```

- *Type:* object

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.attributes"></a>

```csharp
public string Attributes { get; }
```

- *Type:* string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; }
```

- *Type:* string[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `ClientClaimName`<sup>Required</sup> <a name="ClientClaimName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clientClaimName"></a>

```csharp
public string ClientClaimName { get; }
```

- *Type:* string

---

##### `ClientClaimValues`<sup>Required</sup> <a name="ClientClaimValues" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clientClaimValues"></a>

```csharp
public string[] ClientClaimValues { get; }
```

- *Type:* string[]

---

##### `ClockSkewSeconds`<sup>Required</sup> <a name="ClockSkewSeconds" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clockSkewSeconds"></a>

```csharp
public double ClockSkewSeconds { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OauthClients`<sup>Required</sup> <a name="OauthClients" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.oauthClients"></a>

```csharp
public string[] OauthClients { get; }
```

- *Type:* string[]

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `PublicCertificate`<sup>Required</sup> <a name="PublicCertificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.publicCertificate"></a>

```csharp
public string PublicCertificate { get; }
```

- *Type:* string

---

##### `PublicKeyEndpoint`<sup>Required</sup> <a name="PublicKeyEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.publicKeyEndpoint"></a>

```csharp
public string PublicKeyEndpoint { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `SubjectClaimName`<sup>Required</sup> <a name="SubjectClaimName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectClaimName"></a>

```csharp
public string SubjectClaimName { get; }
```

- *Type:* string

---

##### `SubjectMappingAttribute`<sup>Required</sup> <a name="SubjectMappingAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectMappingAttribute"></a>

```csharp
public string SubjectMappingAttribute { get; }
```

- *Type:* string

---

##### `SubjectType`<sup>Required</sup> <a name="SubjectType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectType"></a>

```csharp
public string SubjectType { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsIdentityPropagationTrustConfig <a name="IdentityDomainsIdentityPropagationTrustConfig" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityPropagationTrustConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IdcsEndpoint,
    string Issuer,
    string Name,
    string[] Schemas,
    string Type,
    string AccountId = null,
    object Active = null,
    object AllowImpersonation = null,
    string Attributes = null,
    string[] AttributeSets = null,
    string Authorization = null,
    string ClientClaimName = null,
    string[] ClientClaimValues = null,
    double ClockSkewSeconds = null,
    string Description = null,
    object ImpersonationServiceUsers = null,
    IdentityDomainsIdentityPropagationTrustKeytab Keytab = null,
    string[] OauthClients = null,
    string Ocid = null,
    string PublicCertificate = null,
    string PublicKeyEndpoint = null,
    string ResourceTypeSchemaVersion = null,
    string SubjectClaimName = null,
    string SubjectMappingAttribute = null,
    string SubjectType = null,
    object Tags = null,
    IdentityDomainsIdentityPropagationTrustTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#idcs_endpoint IdentityDomainsIdentityPropagationTrust#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.issuer">Issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#issuer IdentityDomainsIdentityPropagationTrust#issuer}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#name IdentityDomainsIdentityPropagationTrust#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.schemas">Schemas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#schemas IdentityDomainsIdentityPropagationTrust#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#type IdentityDomainsIdentityPropagationTrust#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#account_id IdentityDomainsIdentityPropagationTrust#account_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.active">Active</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#active IdentityDomainsIdentityPropagationTrust#active}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.allowImpersonation">AllowImpersonation</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#allow_impersonation IdentityDomainsIdentityPropagationTrust#allow_impersonation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.attributes">Attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#attributes IdentityDomainsIdentityPropagationTrust#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#attribute_sets IdentityDomainsIdentityPropagationTrust#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#authorization IdentityDomainsIdentityPropagationTrust#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.clientClaimName">ClientClaimName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#client_claim_name IdentityDomainsIdentityPropagationTrust#client_claim_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.clientClaimValues">ClientClaimValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#client_claim_values IdentityDomainsIdentityPropagationTrust#client_claim_values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.clockSkewSeconds">ClockSkewSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#clock_skew_seconds IdentityDomainsIdentityPropagationTrust#clock_skew_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#description IdentityDomainsIdentityPropagationTrust#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.impersonationServiceUsers">ImpersonationServiceUsers</a></code> | <code>object</code> | impersonation_service_users block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.keytab">Keytab</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab">IdentityDomainsIdentityPropagationTrustKeytab</a></code> | keytab block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.oauthClients">OauthClients</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#oauth_clients IdentityDomainsIdentityPropagationTrust#oauth_clients}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.ocid">Ocid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#ocid IdentityDomainsIdentityPropagationTrust#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.publicCertificate">PublicCertificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#public_certificate IdentityDomainsIdentityPropagationTrust#public_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.publicKeyEndpoint">PublicKeyEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#public_key_endpoint IdentityDomainsIdentityPropagationTrust#public_key_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#resource_type_schema_version IdentityDomainsIdentityPropagationTrust#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.subjectClaimName">SubjectClaimName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#subject_claim_name IdentityDomainsIdentityPropagationTrust#subject_claim_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.subjectMappingAttribute">SubjectMappingAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#subject_mapping_attribute IdentityDomainsIdentityPropagationTrust#subject_mapping_attribute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.subjectType">SubjectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#subject_type IdentityDomainsIdentityPropagationTrust#subject_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.tags">Tags</a></code> | <code>object</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts">IdentityDomainsIdentityPropagationTrustTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#idcs_endpoint IdentityDomainsIdentityPropagationTrust#idcs_endpoint}.

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#issuer IdentityDomainsIdentityPropagationTrust#issuer}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#name IdentityDomainsIdentityPropagationTrust#name}.

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.schemas"></a>

```csharp
public string[] Schemas { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#schemas IdentityDomainsIdentityPropagationTrust#schemas}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#type IdentityDomainsIdentityPropagationTrust#type}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#account_id IdentityDomainsIdentityPropagationTrust#account_id}.

---

##### `Active`<sup>Optional</sup> <a name="Active" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.active"></a>

```csharp
public object Active { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#active IdentityDomainsIdentityPropagationTrust#active}.

---

##### `AllowImpersonation`<sup>Optional</sup> <a name="AllowImpersonation" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.allowImpersonation"></a>

```csharp
public object AllowImpersonation { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#allow_impersonation IdentityDomainsIdentityPropagationTrust#allow_impersonation}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.attributes"></a>

```csharp
public string Attributes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#attributes IdentityDomainsIdentityPropagationTrust#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#attribute_sets IdentityDomainsIdentityPropagationTrust#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#authorization IdentityDomainsIdentityPropagationTrust#authorization}.

---

##### `ClientClaimName`<sup>Optional</sup> <a name="ClientClaimName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.clientClaimName"></a>

```csharp
public string ClientClaimName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#client_claim_name IdentityDomainsIdentityPropagationTrust#client_claim_name}.

---

##### `ClientClaimValues`<sup>Optional</sup> <a name="ClientClaimValues" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.clientClaimValues"></a>

```csharp
public string[] ClientClaimValues { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#client_claim_values IdentityDomainsIdentityPropagationTrust#client_claim_values}.

---

##### `ClockSkewSeconds`<sup>Optional</sup> <a name="ClockSkewSeconds" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.clockSkewSeconds"></a>

```csharp
public double ClockSkewSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#clock_skew_seconds IdentityDomainsIdentityPropagationTrust#clock_skew_seconds}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#description IdentityDomainsIdentityPropagationTrust#description}.

---

##### `ImpersonationServiceUsers`<sup>Optional</sup> <a name="ImpersonationServiceUsers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.impersonationServiceUsers"></a>

```csharp
public object ImpersonationServiceUsers { get; set; }
```

- *Type:* object

impersonation_service_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#impersonation_service_users IdentityDomainsIdentityPropagationTrust#impersonation_service_users}

---

##### `Keytab`<sup>Optional</sup> <a name="Keytab" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.keytab"></a>

```csharp
public IdentityDomainsIdentityPropagationTrustKeytab Keytab { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab">IdentityDomainsIdentityPropagationTrustKeytab</a>

keytab block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#keytab IdentityDomainsIdentityPropagationTrust#keytab}

---

##### `OauthClients`<sup>Optional</sup> <a name="OauthClients" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.oauthClients"></a>

```csharp
public string[] OauthClients { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#oauth_clients IdentityDomainsIdentityPropagationTrust#oauth_clients}.

---

##### `Ocid`<sup>Optional</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.ocid"></a>

```csharp
public string Ocid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#ocid IdentityDomainsIdentityPropagationTrust#ocid}.

---

##### `PublicCertificate`<sup>Optional</sup> <a name="PublicCertificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.publicCertificate"></a>

```csharp
public string PublicCertificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#public_certificate IdentityDomainsIdentityPropagationTrust#public_certificate}.

---

##### `PublicKeyEndpoint`<sup>Optional</sup> <a name="PublicKeyEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.publicKeyEndpoint"></a>

```csharp
public string PublicKeyEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#public_key_endpoint IdentityDomainsIdentityPropagationTrust#public_key_endpoint}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#resource_type_schema_version IdentityDomainsIdentityPropagationTrust#resource_type_schema_version}.

---

##### `SubjectClaimName`<sup>Optional</sup> <a name="SubjectClaimName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.subjectClaimName"></a>

```csharp
public string SubjectClaimName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#subject_claim_name IdentityDomainsIdentityPropagationTrust#subject_claim_name}.

---

##### `SubjectMappingAttribute`<sup>Optional</sup> <a name="SubjectMappingAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.subjectMappingAttribute"></a>

```csharp
public string SubjectMappingAttribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#subject_mapping_attribute IdentityDomainsIdentityPropagationTrust#subject_mapping_attribute}.

---

##### `SubjectType`<sup>Optional</sup> <a name="SubjectType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.subjectType"></a>

```csharp
public string SubjectType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#subject_type IdentityDomainsIdentityPropagationTrust#subject_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.tags"></a>

```csharp
public object Tags { get; set; }
```

- *Type:* object

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#tags IdentityDomainsIdentityPropagationTrust#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.timeouts"></a>

```csharp
public IdentityDomainsIdentityPropagationTrustTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts">IdentityDomainsIdentityPropagationTrustTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#timeouts IdentityDomainsIdentityPropagationTrust#timeouts}

---

### IdentityDomainsIdentityPropagationTrustIdcsCreatedBy <a name="IdentityDomainsIdentityPropagationTrustIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityPropagationTrustIdcsCreatedBy {

};
```


### IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy <a name="IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy {

};
```


### IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers <a name="IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers {
    string Rule,
    string Value,
    string Ocid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers.property.rule">Rule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#rule IdentityDomainsIdentityPropagationTrust#rule}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#value IdentityDomainsIdentityPropagationTrust#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers.property.ocid">Ocid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#ocid IdentityDomainsIdentityPropagationTrust#ocid}. |

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers.property.rule"></a>

```csharp
public string Rule { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#rule IdentityDomainsIdentityPropagationTrust#rule}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#value IdentityDomainsIdentityPropagationTrust#value}.

---

##### `Ocid`<sup>Optional</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers.property.ocid"></a>

```csharp
public string Ocid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#ocid IdentityDomainsIdentityPropagationTrust#ocid}.

---

### IdentityDomainsIdentityPropagationTrustKeytab <a name="IdentityDomainsIdentityPropagationTrustKeytab" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityPropagationTrustKeytab {
    string SecretOcid,
    double SecretVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab.property.secretOcid">SecretOcid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#secret_ocid IdentityDomainsIdentityPropagationTrust#secret_ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab.property.secretVersion">SecretVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#secret_version IdentityDomainsIdentityPropagationTrust#secret_version}. |

---

##### `SecretOcid`<sup>Required</sup> <a name="SecretOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab.property.secretOcid"></a>

```csharp
public string SecretOcid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#secret_ocid IdentityDomainsIdentityPropagationTrust#secret_ocid}.

---

##### `SecretVersion`<sup>Optional</sup> <a name="SecretVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab.property.secretVersion"></a>

```csharp
public double SecretVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#secret_version IdentityDomainsIdentityPropagationTrust#secret_version}.

---

### IdentityDomainsIdentityPropagationTrustMeta <a name="IdentityDomainsIdentityPropagationTrustMeta" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMeta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityPropagationTrustMeta {

};
```


### IdentityDomainsIdentityPropagationTrustTags <a name="IdentityDomainsIdentityPropagationTrustTags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityPropagationTrustTags {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#key IdentityDomainsIdentityPropagationTrust#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#value IdentityDomainsIdentityPropagationTrust#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#key IdentityDomainsIdentityPropagationTrust#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#value IdentityDomainsIdentityPropagationTrust#value}.

---

### IdentityDomainsIdentityPropagationTrustTimeouts <a name="IdentityDomainsIdentityPropagationTrustTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityPropagationTrustTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#create IdentityDomainsIdentityPropagationTrust#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#delete IdentityDomainsIdentityPropagationTrust#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#update IdentityDomainsIdentityPropagationTrust#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#create IdentityDomainsIdentityPropagationTrust#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#delete IdentityDomainsIdentityPropagationTrust#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#update IdentityDomainsIdentityPropagationTrust#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsIdentityPropagationTrustIdcsCreatedByList <a name="IdentityDomainsIdentityPropagationTrustIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityPropagationTrustIdcsCreatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.get"></a>

```csharp
private IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference <a name="IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedBy">IdentityDomainsIdentityPropagationTrustIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsIdentityPropagationTrustIdcsCreatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedBy">IdentityDomainsIdentityPropagationTrustIdcsCreatedBy</a>

---


### IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList <a name="IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.get"></a>

```csharp
private IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference <a name="IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy">IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy">IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy</a>

---


### IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList <a name="IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.get"></a>

```csharp
private IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference <a name="IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.resetOcid">ResetOcid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOcid` <a name="ResetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.resetOcid"></a>

```csharp
private void ResetOcid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.ocidInput">OcidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.ruleInput">RuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.rule">Rule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `OcidInput`<sup>Optional</sup> <a name="OcidInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.ocidInput"></a>

```csharp
public string OcidInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.ruleInput"></a>

```csharp
public string RuleInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.rule"></a>

```csharp
public string Rule { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsIdentityPropagationTrustKeytabOutputReference <a name="IdentityDomainsIdentityPropagationTrustKeytabOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityPropagationTrustKeytabOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.resetSecretVersion">ResetSecretVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretVersion` <a name="ResetSecretVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.resetSecretVersion"></a>

```csharp
private void ResetSecretVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.secretOcidInput">SecretOcidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.secretOcid">SecretOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.secretVersion">SecretVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab">IdentityDomainsIdentityPropagationTrustKeytab</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretOcidInput`<sup>Optional</sup> <a name="SecretOcidInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.secretOcidInput"></a>

```csharp
public string SecretOcidInput { get; }
```

- *Type:* string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.secretVersionInput"></a>

```csharp
public double SecretVersionInput { get; }
```

- *Type:* double

---

##### `SecretOcid`<sup>Required</sup> <a name="SecretOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.secretOcid"></a>

```csharp
public string SecretOcid { get; }
```

- *Type:* string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.secretVersion"></a>

```csharp
public double SecretVersion { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsIdentityPropagationTrustKeytab InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab">IdentityDomainsIdentityPropagationTrustKeytab</a>

---


### IdentityDomainsIdentityPropagationTrustMetaList <a name="IdentityDomainsIdentityPropagationTrustMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityPropagationTrustMetaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.get"></a>

```csharp
private IdentityDomainsIdentityPropagationTrustMetaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsIdentityPropagationTrustMetaOutputReference <a name="IdentityDomainsIdentityPropagationTrustMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityPropagationTrustMetaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMeta">IdentityDomainsIdentityPropagationTrustMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsIdentityPropagationTrustMeta InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMeta">IdentityDomainsIdentityPropagationTrustMeta</a>

---


### IdentityDomainsIdentityPropagationTrustTagsList <a name="IdentityDomainsIdentityPropagationTrustTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityPropagationTrustTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.get"></a>

```csharp
private IdentityDomainsIdentityPropagationTrustTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsIdentityPropagationTrustTagsOutputReference <a name="IdentityDomainsIdentityPropagationTrustTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityPropagationTrustTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference <a name="IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



