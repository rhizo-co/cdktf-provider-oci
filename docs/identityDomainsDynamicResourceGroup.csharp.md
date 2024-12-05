# `identityDomainsDynamicResourceGroup` Submodule <a name="`identityDomainsDynamicResourceGroup` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsDynamicResourceGroup <a name="IdentityDomainsDynamicResourceGroup" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group oci_identity_domains_dynamic_resource_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsDynamicResourceGroup(Construct Scope, string Id, IdentityDomainsDynamicResourceGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig">IdentityDomainsDynamicResourceGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig">IdentityDomainsDynamicResourceGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.putUrnietfparamsscimschemasoracleidcsextensionOciTags">PutUrnietfparamsscimschemasoracleidcsextensionOciTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetOcid">ResetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetUrnietfparamsscimschemasoracleidcsextensionOciTags">ResetUrnietfparamsscimschemasoracleidcsextensionOciTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.putTags"></a>

```csharp
private void PutTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.putTags.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(IdentityDomainsDynamicResourceGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeouts">IdentityDomainsDynamicResourceGroupTimeouts</a>

---

##### `PutUrnietfparamsscimschemasoracleidcsextensionOciTags` <a name="PutUrnietfparamsscimschemasoracleidcsextensionOciTags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.putUrnietfparamsscimschemasoracleidcsextensionOciTags"></a>

```csharp
private void PutUrnietfparamsscimschemasoracleidcsextensionOciTags(IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.putUrnietfparamsscimschemasoracleidcsextensionOciTags.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags</a>

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetAttributeSets"></a>

```csharp
private void ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetOcid` <a name="ResetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetOcid"></a>

```csharp
private void ResetOcid()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetResourceTypeSchemaVersion"></a>

```csharp
private void ResetResourceTypeSchemaVersion()
```

##### `ResetTags` <a name="ResetTags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUrnietfparamsscimschemasoracleidcsextensionOciTags` <a name="ResetUrnietfparamsscimschemasoracleidcsextensionOciTags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetUrnietfparamsscimschemasoracleidcsextensionOciTags"></a>

```csharp
private void ResetUrnietfparamsscimschemasoracleidcsextensionOciTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainsDynamicResourceGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsDynamicResourceGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsDynamicResourceGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsDynamicResourceGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsDynamicResourceGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IdentityDomainsDynamicResourceGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityDomainsDynamicResourceGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityDomainsDynamicResourceGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsDynamicResourceGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.compartmentOcid">CompartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.deleteInProgress">DeleteInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.domainOcid">DomainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.dynamicGroupAppRoles">DynamicGroupAppRoles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList">IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.grants">Grants</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList">IdentityDomainsDynamicResourceGroupGrantsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList">IdentityDomainsDynamicResourceGroupIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList">IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList">IdentityDomainsDynamicResourceGroupMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList">IdentityDomainsDynamicResourceGroupTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.tenancyOcid">TenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference">IdentityDomainsDynamicResourceGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.urnietfparamsscimschemasoracleidcsextensionOciTags">UrnietfparamsscimschemasoracleidcsextensionOciTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.attributesInput">AttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.matchingRuleInput">MatchingRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.ocidInput">OcidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.schemasInput">SchemasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.tagsInput">TagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.urnietfparamsscimschemasoracleidcsextensionOciTagsInput">UrnietfparamsscimschemasoracleidcsextensionOciTagsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.attributes">Attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.matchingRule">MatchingRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.compartmentOcid"></a>

```csharp
public string CompartmentOcid { get; }
```

- *Type:* string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.deleteInProgress"></a>

```csharp
public IResolvable DeleteInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.domainOcid"></a>

```csharp
public string DomainOcid { get; }
```

- *Type:* string

---

##### `DynamicGroupAppRoles`<sup>Required</sup> <a name="DynamicGroupAppRoles" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.dynamicGroupAppRoles"></a>

```csharp
public IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList DynamicGroupAppRoles { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList">IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList</a>

---

##### `Grants`<sup>Required</sup> <a name="Grants" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.grants"></a>

```csharp
public IdentityDomainsDynamicResourceGroupGrantsList Grants { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList">IdentityDomainsDynamicResourceGroupGrantsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.idcsCreatedBy"></a>

```csharp
public IdentityDomainsDynamicResourceGroupIdcsCreatedByList IdcsCreatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList">IdentityDomainsDynamicResourceGroupIdcsCreatedByList</a>

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.idcsLastModifiedBy"></a>

```csharp
public IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList IdcsLastModifiedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList">IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.idcsLastUpgradedInRelease"></a>

```csharp
public string IdcsLastUpgradedInRelease { get; }
```

- *Type:* string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.idcsPreventedOperations"></a>

```csharp
public string[] IdcsPreventedOperations { get; }
```

- *Type:* string[]

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.meta"></a>

```csharp
public IdentityDomainsDynamicResourceGroupMetaList Meta { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList">IdentityDomainsDynamicResourceGroupMetaList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.tags"></a>

```csharp
public IdentityDomainsDynamicResourceGroupTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList">IdentityDomainsDynamicResourceGroupTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.tenancyOcid"></a>

```csharp
public string TenancyOcid { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.timeouts"></a>

```csharp
public IdentityDomainsDynamicResourceGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference">IdentityDomainsDynamicResourceGroupTimeoutsOutputReference</a>

---

##### `UrnietfparamsscimschemasoracleidcsextensionOciTags`<sup>Required</sup> <a name="UrnietfparamsscimschemasoracleidcsextensionOciTags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.urnietfparamsscimschemasoracleidcsextensionOciTags"></a>

```csharp
public IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference UrnietfparamsscimschemasoracleidcsextensionOciTags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference</a>

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.attributeSetsInput"></a>

```csharp
public string[] AttributeSetsInput { get; }
```

- *Type:* string[]

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.attributesInput"></a>

```csharp
public string AttributesInput { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.idcsEndpointInput"></a>

```csharp
public string IdcsEndpointInput { get; }
```

- *Type:* string

---

##### `MatchingRuleInput`<sup>Optional</sup> <a name="MatchingRuleInput" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.matchingRuleInput"></a>

```csharp
public string MatchingRuleInput { get; }
```

- *Type:* string

---

##### `OcidInput`<sup>Optional</sup> <a name="OcidInput" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.ocidInput"></a>

```csharp
public string OcidInput { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.resourceTypeSchemaVersionInput"></a>

```csharp
public string ResourceTypeSchemaVersionInput { get; }
```

- *Type:* string

---

##### `SchemasInput`<sup>Optional</sup> <a name="SchemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.schemasInput"></a>

```csharp
public string[] SchemasInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.tagsInput"></a>

```csharp
public object TagsInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UrnietfparamsscimschemasoracleidcsextensionOciTagsInput`<sup>Optional</sup> <a name="UrnietfparamsscimschemasoracleidcsextensionOciTagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.urnietfparamsscimschemasoracleidcsextensionOciTagsInput"></a>

```csharp
public IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags UrnietfparamsscimschemasoracleidcsextensionOciTagsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags</a>

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.attributes"></a>

```csharp
public string Attributes { get; }
```

- *Type:* string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; }
```

- *Type:* string[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `MatchingRule`<sup>Required</sup> <a name="MatchingRule" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.matchingRule"></a>

```csharp
public string MatchingRule { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsDynamicResourceGroupConfig <a name="IdentityDomainsDynamicResourceGroupConfig" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsDynamicResourceGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string IdcsEndpoint,
    string MatchingRule,
    string[] Schemas,
    string Attributes = null,
    string[] AttributeSets = null,
    string Authorization = null,
    string Description = null,
    string Ocid = null,
    string ResourceTypeSchemaVersion = null,
    object Tags = null,
    IdentityDomainsDynamicResourceGroupTimeouts Timeouts = null,
    IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags UrnietfparamsscimschemasoracleidcsextensionOciTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#display_name IdentityDomainsDynamicResourceGroup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#idcs_endpoint IdentityDomainsDynamicResourceGroup#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.matchingRule">MatchingRule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#matching_rule IdentityDomainsDynamicResourceGroup#matching_rule}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.schemas">Schemas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#schemas IdentityDomainsDynamicResourceGroup#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.attributes">Attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#attributes IdentityDomainsDynamicResourceGroup#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#attribute_sets IdentityDomainsDynamicResourceGroup#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#authorization IdentityDomainsDynamicResourceGroup#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#description IdentityDomainsDynamicResourceGroup#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.ocid">Ocid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#ocid IdentityDomainsDynamicResourceGroup#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#resource_type_schema_version IdentityDomainsDynamicResourceGroup#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.tags">Tags</a></code> | <code>object</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeouts">IdentityDomainsDynamicResourceGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.urnietfparamsscimschemasoracleidcsextensionOciTags">UrnietfparamsscimschemasoracleidcsextensionOciTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags</a></code> | urnietfparamsscimschemasoracleidcsextension_oci_tags block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#display_name IdentityDomainsDynamicResourceGroup#display_name}.

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#idcs_endpoint IdentityDomainsDynamicResourceGroup#idcs_endpoint}.

---

##### `MatchingRule`<sup>Required</sup> <a name="MatchingRule" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.matchingRule"></a>

```csharp
public string MatchingRule { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#matching_rule IdentityDomainsDynamicResourceGroup#matching_rule}.

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.schemas"></a>

```csharp
public string[] Schemas { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#schemas IdentityDomainsDynamicResourceGroup#schemas}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.attributes"></a>

```csharp
public string Attributes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#attributes IdentityDomainsDynamicResourceGroup#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#attribute_sets IdentityDomainsDynamicResourceGroup#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#authorization IdentityDomainsDynamicResourceGroup#authorization}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#description IdentityDomainsDynamicResourceGroup#description}.

---

##### `Ocid`<sup>Optional</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.ocid"></a>

```csharp
public string Ocid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#ocid IdentityDomainsDynamicResourceGroup#ocid}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#resource_type_schema_version IdentityDomainsDynamicResourceGroup#resource_type_schema_version}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.tags"></a>

```csharp
public object Tags { get; set; }
```

- *Type:* object

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#tags IdentityDomainsDynamicResourceGroup#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.timeouts"></a>

```csharp
public IdentityDomainsDynamicResourceGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeouts">IdentityDomainsDynamicResourceGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#timeouts IdentityDomainsDynamicResourceGroup#timeouts}

---

##### `UrnietfparamsscimschemasoracleidcsextensionOciTags`<sup>Optional</sup> <a name="UrnietfparamsscimschemasoracleidcsextensionOciTags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.urnietfparamsscimschemasoracleidcsextensionOciTags"></a>

```csharp
public IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags UrnietfparamsscimschemasoracleidcsextensionOciTags { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags</a>

urnietfparamsscimschemasoracleidcsextension_oci_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#urnietfparamsscimschemasoracleidcsextension_oci_tags IdentityDomainsDynamicResourceGroup#urnietfparamsscimschemasoracleidcsextension_oci_tags}

---

### IdentityDomainsDynamicResourceGroupDynamicGroupAppRoles <a name="IdentityDomainsDynamicResourceGroupDynamicGroupAppRoles" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRoles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRoles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsDynamicResourceGroupDynamicGroupAppRoles {

};
```


### IdentityDomainsDynamicResourceGroupGrants <a name="IdentityDomainsDynamicResourceGroupGrants" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrants"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrants.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsDynamicResourceGroupGrants {

};
```


### IdentityDomainsDynamicResourceGroupIdcsCreatedBy <a name="IdentityDomainsDynamicResourceGroupIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsDynamicResourceGroupIdcsCreatedBy {

};
```


### IdentityDomainsDynamicResourceGroupIdcsLastModifiedBy <a name="IdentityDomainsDynamicResourceGroupIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsDynamicResourceGroupIdcsLastModifiedBy {

};
```


### IdentityDomainsDynamicResourceGroupMeta <a name="IdentityDomainsDynamicResourceGroupMeta" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMeta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsDynamicResourceGroupMeta {

};
```


### IdentityDomainsDynamicResourceGroupTags <a name="IdentityDomainsDynamicResourceGroupTags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsDynamicResourceGroupTags {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#key IdentityDomainsDynamicResourceGroup#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#value IdentityDomainsDynamicResourceGroup#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#key IdentityDomainsDynamicResourceGroup#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#value IdentityDomainsDynamicResourceGroup#value}.

---

### IdentityDomainsDynamicResourceGroupTimeouts <a name="IdentityDomainsDynamicResourceGroupTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsDynamicResourceGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#create IdentityDomainsDynamicResourceGroup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#delete IdentityDomainsDynamicResourceGroup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#update IdentityDomainsDynamicResourceGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#create IdentityDomainsDynamicResourceGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#delete IdentityDomainsDynamicResourceGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#update IdentityDomainsDynamicResourceGroup#update}.

---

### IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags <a name="IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags {
    object DefinedTags = null,
    object FreeformTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags.property.definedTags">DefinedTags</a></code> | <code>object</code> | defined_tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags.property.freeformTags">FreeformTags</a></code> | <code>object</code> | freeform_tags block. |

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags.property.definedTags"></a>

```csharp
public object DefinedTags { get; set; }
```

- *Type:* object

defined_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#defined_tags IdentityDomainsDynamicResourceGroup#defined_tags}

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags.property.freeformTags"></a>

```csharp
public object FreeformTags { get; set; }
```

- *Type:* object

freeform_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#freeform_tags IdentityDomainsDynamicResourceGroup#freeform_tags}

---

### IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags <a name="IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags {
    string Key,
    string Namespace,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#key IdentityDomainsDynamicResourceGroup#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#namespace IdentityDomainsDynamicResourceGroup#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#value IdentityDomainsDynamicResourceGroup#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#key IdentityDomainsDynamicResourceGroup#key}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#namespace IdentityDomainsDynamicResourceGroup#namespace}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#value IdentityDomainsDynamicResourceGroup#value}.

---

### IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags <a name="IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#key IdentityDomainsDynamicResourceGroup#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#value IdentityDomainsDynamicResourceGroup#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#key IdentityDomainsDynamicResourceGroup#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#value IdentityDomainsDynamicResourceGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList <a name="IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.get"></a>

```csharp
private IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference <a name="IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.adminRole">AdminRole</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.appName">AppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.legacyGroupName">LegacyGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRoles">IdentityDomainsDynamicResourceGroupDynamicGroupAppRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminRole`<sup>Required</sup> <a name="AdminRole" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.adminRole"></a>

```csharp
public IResolvable AdminRole { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.appName"></a>

```csharp
public string AppName { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `LegacyGroupName`<sup>Required</sup> <a name="LegacyGroupName" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.legacyGroupName"></a>

```csharp
public string LegacyGroupName { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsDynamicResourceGroupDynamicGroupAppRoles InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRoles">IdentityDomainsDynamicResourceGroupDynamicGroupAppRoles</a>

---


### IdentityDomainsDynamicResourceGroupGrantsList <a name="IdentityDomainsDynamicResourceGroupGrantsList" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsDynamicResourceGroupGrantsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.get"></a>

```csharp
private IdentityDomainsDynamicResourceGroupGrantsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsDynamicResourceGroupGrantsOutputReference <a name="IdentityDomainsDynamicResourceGroupGrantsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsDynamicResourceGroupGrantsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.property.grantMechanism">GrantMechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrants">IdentityDomainsDynamicResourceGroupGrants</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `GrantMechanism`<sup>Required</sup> <a name="GrantMechanism" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.property.grantMechanism"></a>

```csharp
public string GrantMechanism { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsDynamicResourceGroupGrants InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrants">IdentityDomainsDynamicResourceGroupGrants</a>

---


### IdentityDomainsDynamicResourceGroupIdcsCreatedByList <a name="IdentityDomainsDynamicResourceGroupIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsDynamicResourceGroupIdcsCreatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.get"></a>

```csharp
private IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference <a name="IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedBy">IdentityDomainsDynamicResourceGroupIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsDynamicResourceGroupIdcsCreatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedBy">IdentityDomainsDynamicResourceGroupIdcsCreatedBy</a>

---


### IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList <a name="IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.get"></a>

```csharp
private IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference <a name="IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedBy">IdentityDomainsDynamicResourceGroupIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsDynamicResourceGroupIdcsLastModifiedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedBy">IdentityDomainsDynamicResourceGroupIdcsLastModifiedBy</a>

---


### IdentityDomainsDynamicResourceGroupMetaList <a name="IdentityDomainsDynamicResourceGroupMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsDynamicResourceGroupMetaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.get"></a>

```csharp
private IdentityDomainsDynamicResourceGroupMetaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsDynamicResourceGroupMetaOutputReference <a name="IdentityDomainsDynamicResourceGroupMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsDynamicResourceGroupMetaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMeta">IdentityDomainsDynamicResourceGroupMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsDynamicResourceGroupMeta InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMeta">IdentityDomainsDynamicResourceGroupMeta</a>

---


### IdentityDomainsDynamicResourceGroupTagsList <a name="IdentityDomainsDynamicResourceGroupTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsDynamicResourceGroupTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.get"></a>

```csharp
private IdentityDomainsDynamicResourceGroupTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsDynamicResourceGroupTagsOutputReference <a name="IdentityDomainsDynamicResourceGroupTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsDynamicResourceGroupTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsDynamicResourceGroupTimeoutsOutputReference <a name="IdentityDomainsDynamicResourceGroupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsDynamicResourceGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList <a name="IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.get"></a>

```csharp
private IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference <a name="IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList <a name="IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.get"></a>

```csharp
private IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference <a name="IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference <a name="IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.putDefinedTags">PutDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.putFreeformTags">PutFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefinedTags` <a name="PutDefinedTags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.putDefinedTags"></a>

```csharp
private void PutDefinedTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.putDefinedTags.parameter.value"></a>

- *Type:* object

---

##### `PutFreeformTags` <a name="PutFreeformTags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.putFreeformTags"></a>

```csharp
private void PutFreeformTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.putFreeformTags.parameter.value"></a>

- *Type:* object

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.definedTags">DefinedTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.freeformTags">FreeformTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.tagSlug">TagSlug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.definedTagsInput">DefinedTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.definedTags"></a>

```csharp
public IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList DefinedTags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.freeformTags"></a>

```csharp
public IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList FreeformTags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList</a>

---

##### `TagSlug`<sup>Required</sup> <a name="TagSlug" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.tagSlug"></a>

```csharp
public string TagSlug { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.definedTagsInput"></a>

```csharp
public object DefinedTagsInput { get; }
```

- *Type:* object

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.freeformTagsInput"></a>

```csharp
public object FreeformTagsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags</a>

---



