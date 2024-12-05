# `identityDomainsCustomerSecretKey` Submodule <a name="`identityDomainsCustomerSecretKey` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsCustomerSecretKey <a name="IdentityDomainsCustomerSecretKey" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key oci_identity_domains_customer_secret_key}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsCustomerSecretKey(Construct Scope, string Id, IdentityDomainsCustomerSecretKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig">IdentityDomainsCustomerSecretKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig">IdentityDomainsCustomerSecretKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.putUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">PutUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.putUser">PutUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetExpiresOn">ResetExpiresOn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetOcid">ResetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">ResetUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.putTags"></a>

```csharp
private void PutTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.putTags.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.putTimeouts"></a>

```csharp
private void PutTimeouts(IdentityDomainsCustomerSecretKeyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeouts">IdentityDomainsCustomerSecretKeyTimeouts</a>

---

##### `PutUrnietfparamsscimschemasoracleidcsextensionselfChangeUser` <a name="PutUrnietfparamsscimschemasoracleidcsextensionselfChangeUser" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.putUrnietfparamsscimschemasoracleidcsextensionselfChangeUser"></a>

```csharp
private void PutUrnietfparamsscimschemasoracleidcsextensionselfChangeUser(IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.putUrnietfparamsscimschemasoracleidcsextensionselfChangeUser.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a>

---

##### `PutUser` <a name="PutUser" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.putUser"></a>

```csharp
private void PutUser(IdentityDomainsCustomerSecretKeyUser Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.putUser.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUser">IdentityDomainsCustomerSecretKeyUser</a>

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetAttributeSets"></a>

```csharp
private void ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetExpiresOn` <a name="ResetExpiresOn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetExpiresOn"></a>

```csharp
private void ResetExpiresOn()
```

##### `ResetOcid` <a name="ResetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetOcid"></a>

```csharp
private void ResetOcid()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetResourceTypeSchemaVersion"></a>

```csharp
private void ResetResourceTypeSchemaVersion()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUrnietfparamsscimschemasoracleidcsextensionselfChangeUser` <a name="ResetUrnietfparamsscimschemasoracleidcsextensionselfChangeUser" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetUrnietfparamsscimschemasoracleidcsextensionselfChangeUser"></a>

```csharp
private void ResetUrnietfparamsscimschemasoracleidcsextensionselfChangeUser()
```

##### `ResetUser` <a name="ResetUser" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetUser"></a>

```csharp
private void ResetUser()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainsCustomerSecretKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsCustomerSecretKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsCustomerSecretKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsCustomerSecretKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsCustomerSecretKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IdentityDomainsCustomerSecretKey resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityDomainsCustomerSecretKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityDomainsCustomerSecretKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsCustomerSecretKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.accessKey">AccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.compartmentOcid">CompartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.deleteInProgress">DeleteInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.domainOcid">DomainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList">IdentityDomainsCustomerSecretKeyIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList">IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList">IdentityDomainsCustomerSecretKeyMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.secretKey">SecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList">IdentityDomainsCustomerSecretKeyTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.tenancyOcid">TenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference">IdentityDomainsCustomerSecretKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUser">UrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference">IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.user">User</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference">IdentityDomainsCustomerSecretKeyUserOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.attributesInput">AttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.expiresOnInput">ExpiresOnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.ocidInput">OcidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.schemasInput">SchemasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.tagsInput">TagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUserInput">UrnietfparamsscimschemasoracleidcsextensionselfChangeUserInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.userInput">UserInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUser">IdentityDomainsCustomerSecretKeyUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.attributes">Attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.expiresOn">ExpiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccessKey`<sup>Required</sup> <a name="AccessKey" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.accessKey"></a>

```csharp
public string AccessKey { get; }
```

- *Type:* string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.compartmentOcid"></a>

```csharp
public string CompartmentOcid { get; }
```

- *Type:* string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.deleteInProgress"></a>

```csharp
public IResolvable DeleteInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.domainOcid"></a>

```csharp
public string DomainOcid { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.idcsCreatedBy"></a>

```csharp
public IdentityDomainsCustomerSecretKeyIdcsCreatedByList IdcsCreatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList">IdentityDomainsCustomerSecretKeyIdcsCreatedByList</a>

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.idcsLastModifiedBy"></a>

```csharp
public IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList IdcsLastModifiedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList">IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.idcsLastUpgradedInRelease"></a>

```csharp
public string IdcsLastUpgradedInRelease { get; }
```

- *Type:* string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.idcsPreventedOperations"></a>

```csharp
public string[] IdcsPreventedOperations { get; }
```

- *Type:* string[]

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.meta"></a>

```csharp
public IdentityDomainsCustomerSecretKeyMetaList Meta { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList">IdentityDomainsCustomerSecretKeyMetaList</a>

---

##### `SecretKey`<sup>Required</sup> <a name="SecretKey" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.secretKey"></a>

```csharp
public string SecretKey { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.tags"></a>

```csharp
public IdentityDomainsCustomerSecretKeyTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList">IdentityDomainsCustomerSecretKeyTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.tenancyOcid"></a>

```csharp
public string TenancyOcid { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.timeouts"></a>

```csharp
public IdentityDomainsCustomerSecretKeyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference">IdentityDomainsCustomerSecretKeyTimeoutsOutputReference</a>

---

##### `UrnietfparamsscimschemasoracleidcsextensionselfChangeUser`<sup>Required</sup> <a name="UrnietfparamsscimschemasoracleidcsextensionselfChangeUser" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUser"></a>

```csharp
public IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference UrnietfparamsscimschemasoracleidcsextensionselfChangeUser { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference">IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference</a>

---

##### `User`<sup>Required</sup> <a name="User" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.user"></a>

```csharp
public IdentityDomainsCustomerSecretKeyUserOutputReference User { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference">IdentityDomainsCustomerSecretKeyUserOutputReference</a>

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.attributeSetsInput"></a>

```csharp
public string[] AttributeSetsInput { get; }
```

- *Type:* string[]

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.attributesInput"></a>

```csharp
public string AttributesInput { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ExpiresOnInput`<sup>Optional</sup> <a name="ExpiresOnInput" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.expiresOnInput"></a>

```csharp
public string ExpiresOnInput { get; }
```

- *Type:* string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.idcsEndpointInput"></a>

```csharp
public string IdcsEndpointInput { get; }
```

- *Type:* string

---

##### `OcidInput`<sup>Optional</sup> <a name="OcidInput" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.ocidInput"></a>

```csharp
public string OcidInput { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.resourceTypeSchemaVersionInput"></a>

```csharp
public string ResourceTypeSchemaVersionInput { get; }
```

- *Type:* string

---

##### `SchemasInput`<sup>Optional</sup> <a name="SchemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.schemasInput"></a>

```csharp
public string[] SchemasInput { get; }
```

- *Type:* string[]

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.tagsInput"></a>

```csharp
public object TagsInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UrnietfparamsscimschemasoracleidcsextensionselfChangeUserInput`<sup>Optional</sup> <a name="UrnietfparamsscimschemasoracleidcsextensionselfChangeUserInput" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUserInput"></a>

```csharp
public IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser UrnietfparamsscimschemasoracleidcsextensionselfChangeUserInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a>

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.userInput"></a>

```csharp
public IdentityDomainsCustomerSecretKeyUser UserInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUser">IdentityDomainsCustomerSecretKeyUser</a>

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.attributes"></a>

```csharp
public string Attributes { get; }
```

- *Type:* string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; }
```

- *Type:* string[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExpiresOn`<sup>Required</sup> <a name="ExpiresOn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.expiresOn"></a>

```csharp
public string ExpiresOn { get; }
```

- *Type:* string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsCustomerSecretKeyConfig <a name="IdentityDomainsCustomerSecretKeyConfig" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsCustomerSecretKeyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IdcsEndpoint,
    string[] Schemas,
    string Attributes = null,
    string[] AttributeSets = null,
    string Authorization = null,
    string Description = null,
    string DisplayName = null,
    string ExpiresOn = null,
    string Ocid = null,
    string ResourceTypeSchemaVersion = null,
    string Status = null,
    object Tags = null,
    IdentityDomainsCustomerSecretKeyTimeouts Timeouts = null,
    IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser UrnietfparamsscimschemasoracleidcsextensionselfChangeUser = null,
    IdentityDomainsCustomerSecretKeyUser User = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#idcs_endpoint IdentityDomainsCustomerSecretKey#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.schemas">Schemas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#schemas IdentityDomainsCustomerSecretKey#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.attributes">Attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#attributes IdentityDomainsCustomerSecretKey#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#attribute_sets IdentityDomainsCustomerSecretKey#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#authorization IdentityDomainsCustomerSecretKey#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#description IdentityDomainsCustomerSecretKey#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#display_name IdentityDomainsCustomerSecretKey#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.expiresOn">ExpiresOn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#expires_on IdentityDomainsCustomerSecretKey#expires_on}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.ocid">Ocid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#ocid IdentityDomainsCustomerSecretKey#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#resource_type_schema_version IdentityDomainsCustomerSecretKey#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#status IdentityDomainsCustomerSecretKey#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.tags">Tags</a></code> | <code>object</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeouts">IdentityDomainsCustomerSecretKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUser">UrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a></code> | urnietfparamsscimschemasoracleidcsextensionself_change_user block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.user">User</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUser">IdentityDomainsCustomerSecretKeyUser</a></code> | user block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#idcs_endpoint IdentityDomainsCustomerSecretKey#idcs_endpoint}.

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.schemas"></a>

```csharp
public string[] Schemas { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#schemas IdentityDomainsCustomerSecretKey#schemas}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.attributes"></a>

```csharp
public string Attributes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#attributes IdentityDomainsCustomerSecretKey#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#attribute_sets IdentityDomainsCustomerSecretKey#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#authorization IdentityDomainsCustomerSecretKey#authorization}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#description IdentityDomainsCustomerSecretKey#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#display_name IdentityDomainsCustomerSecretKey#display_name}.

---

##### `ExpiresOn`<sup>Optional</sup> <a name="ExpiresOn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.expiresOn"></a>

```csharp
public string ExpiresOn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#expires_on IdentityDomainsCustomerSecretKey#expires_on}.

---

##### `Ocid`<sup>Optional</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.ocid"></a>

```csharp
public string Ocid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#ocid IdentityDomainsCustomerSecretKey#ocid}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#resource_type_schema_version IdentityDomainsCustomerSecretKey#resource_type_schema_version}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#status IdentityDomainsCustomerSecretKey#status}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.tags"></a>

```csharp
public object Tags { get; set; }
```

- *Type:* object

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#tags IdentityDomainsCustomerSecretKey#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.timeouts"></a>

```csharp
public IdentityDomainsCustomerSecretKeyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeouts">IdentityDomainsCustomerSecretKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#timeouts IdentityDomainsCustomerSecretKey#timeouts}

---

##### `UrnietfparamsscimschemasoracleidcsextensionselfChangeUser`<sup>Optional</sup> <a name="UrnietfparamsscimschemasoracleidcsextensionselfChangeUser" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUser"></a>

```csharp
public IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser UrnietfparamsscimschemasoracleidcsextensionselfChangeUser { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a>

urnietfparamsscimschemasoracleidcsextensionself_change_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#urnietfparamsscimschemasoracleidcsextensionself_change_user IdentityDomainsCustomerSecretKey#urnietfparamsscimschemasoracleidcsextensionself_change_user}

---

##### `User`<sup>Optional</sup> <a name="User" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.user"></a>

```csharp
public IdentityDomainsCustomerSecretKeyUser User { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUser">IdentityDomainsCustomerSecretKeyUser</a>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#user IdentityDomainsCustomerSecretKey#user}

---

### IdentityDomainsCustomerSecretKeyIdcsCreatedBy <a name="IdentityDomainsCustomerSecretKeyIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsCustomerSecretKeyIdcsCreatedBy {

};
```


### IdentityDomainsCustomerSecretKeyIdcsLastModifiedBy <a name="IdentityDomainsCustomerSecretKeyIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsCustomerSecretKeyIdcsLastModifiedBy {

};
```


### IdentityDomainsCustomerSecretKeyMeta <a name="IdentityDomainsCustomerSecretKeyMeta" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMeta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsCustomerSecretKeyMeta {

};
```


### IdentityDomainsCustomerSecretKeyTags <a name="IdentityDomainsCustomerSecretKeyTags" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsCustomerSecretKeyTags {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#key IdentityDomainsCustomerSecretKey#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#value IdentityDomainsCustomerSecretKey#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#key IdentityDomainsCustomerSecretKey#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#value IdentityDomainsCustomerSecretKey#value}.

---

### IdentityDomainsCustomerSecretKeyTimeouts <a name="IdentityDomainsCustomerSecretKeyTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsCustomerSecretKeyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#create IdentityDomainsCustomerSecretKey#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#delete IdentityDomainsCustomerSecretKey#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#update IdentityDomainsCustomerSecretKey#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#create IdentityDomainsCustomerSecretKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#delete IdentityDomainsCustomerSecretKey#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#update IdentityDomainsCustomerSecretKey#update}.

---

### IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser <a name="IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser {
    object AllowSelfChange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser.property.allowSelfChange">AllowSelfChange</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#allow_self_change IdentityDomainsCustomerSecretKey#allow_self_change}. |

---

##### `AllowSelfChange`<sup>Optional</sup> <a name="AllowSelfChange" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser.property.allowSelfChange"></a>

```csharp
public object AllowSelfChange { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#allow_self_change IdentityDomainsCustomerSecretKey#allow_self_change}.

---

### IdentityDomainsCustomerSecretKeyUser <a name="IdentityDomainsCustomerSecretKeyUser" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsCustomerSecretKeyUser {
    string Ocid = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUser.property.ocid">Ocid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#ocid IdentityDomainsCustomerSecretKey#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUser.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#value IdentityDomainsCustomerSecretKey#value}. |

---

##### `Ocid`<sup>Optional</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUser.property.ocid"></a>

```csharp
public string Ocid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#ocid IdentityDomainsCustomerSecretKey#ocid}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUser.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#value IdentityDomainsCustomerSecretKey#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsCustomerSecretKeyIdcsCreatedByList <a name="IdentityDomainsCustomerSecretKeyIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsCustomerSecretKeyIdcsCreatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.get"></a>

```csharp
private IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference <a name="IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedBy">IdentityDomainsCustomerSecretKeyIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsCustomerSecretKeyIdcsCreatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedBy">IdentityDomainsCustomerSecretKeyIdcsCreatedBy</a>

---


### IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList <a name="IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.get"></a>

```csharp
private IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference <a name="IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedBy">IdentityDomainsCustomerSecretKeyIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsCustomerSecretKeyIdcsLastModifiedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedBy">IdentityDomainsCustomerSecretKeyIdcsLastModifiedBy</a>

---


### IdentityDomainsCustomerSecretKeyMetaList <a name="IdentityDomainsCustomerSecretKeyMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsCustomerSecretKeyMetaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.get"></a>

```csharp
private IdentityDomainsCustomerSecretKeyMetaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsCustomerSecretKeyMetaOutputReference <a name="IdentityDomainsCustomerSecretKeyMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsCustomerSecretKeyMetaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMeta">IdentityDomainsCustomerSecretKeyMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsCustomerSecretKeyMeta InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMeta">IdentityDomainsCustomerSecretKeyMeta</a>

---


### IdentityDomainsCustomerSecretKeyTagsList <a name="IdentityDomainsCustomerSecretKeyTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsCustomerSecretKeyTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.get"></a>

```csharp
private IdentityDomainsCustomerSecretKeyTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsCustomerSecretKeyTagsOutputReference <a name="IdentityDomainsCustomerSecretKeyTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsCustomerSecretKeyTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsCustomerSecretKeyTimeoutsOutputReference <a name="IdentityDomainsCustomerSecretKeyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsCustomerSecretKeyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference <a name="IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resetAllowSelfChange">ResetAllowSelfChange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowSelfChange` <a name="ResetAllowSelfChange" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resetAllowSelfChange"></a>

```csharp
private void ResetAllowSelfChange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.allowSelfChangeInput">AllowSelfChangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.allowSelfChange">AllowSelfChange</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowSelfChangeInput`<sup>Optional</sup> <a name="AllowSelfChangeInput" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.allowSelfChangeInput"></a>

```csharp
public object AllowSelfChangeInput { get; }
```

- *Type:* object

---

##### `AllowSelfChange`<sup>Required</sup> <a name="AllowSelfChange" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.allowSelfChange"></a>

```csharp
public object AllowSelfChange { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a>

---


### IdentityDomainsCustomerSecretKeyUserOutputReference <a name="IdentityDomainsCustomerSecretKeyUserOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsCustomerSecretKeyUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.resetOcid">ResetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOcid` <a name="ResetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.resetOcid"></a>

```csharp
private void ResetOcid()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.ocidInput">OcidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUser">IdentityDomainsCustomerSecretKeyUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `OcidInput`<sup>Optional</sup> <a name="OcidInput" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.ocidInput"></a>

```csharp
public string OcidInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsCustomerSecretKeyUser InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUser">IdentityDomainsCustomerSecretKeyUser</a>

---



