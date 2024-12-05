# `jmsJavaDownloadsJavaDownloadToken` Submodule <a name="`jmsJavaDownloadsJavaDownloadToken` Submodule" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JmsJavaDownloadsJavaDownloadToken <a name="JmsJavaDownloadsJavaDownloadToken" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token oci_jms_java_downloads_java_download_token}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsJavaDownloadsJavaDownloadToken(Construct Scope, string Id, JmsJavaDownloadsJavaDownloadTokenConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig">JmsJavaDownloadsJavaDownloadTokenConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig">JmsJavaDownloadsJavaDownloadTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetIsDefault">ResetIsDefault</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.putTimeouts"></a>

```csharp
private void PutTimeouts(JmsJavaDownloadsJavaDownloadTokenTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts">JmsJavaDownloadsJavaDownloadTokenTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsDefault` <a name="ResetIsDefault" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetIsDefault"></a>

```csharp
private void ResetIsDefault()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a JmsJavaDownloadsJavaDownloadToken resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

JmsJavaDownloadsJavaDownloadToken.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

JmsJavaDownloadsJavaDownloadToken.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

JmsJavaDownloadsJavaDownloadToken.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

JmsJavaDownloadsJavaDownloadToken.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a JmsJavaDownloadsJavaDownloadToken resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the JmsJavaDownloadsJavaDownloadToken to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing JmsJavaDownloadsJavaDownloadToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the JmsJavaDownloadsJavaDownloadToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.createdBy">CreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList">JmsJavaDownloadsJavaDownloadTokenCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.lastUpdatedBy">LastUpdatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList">JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeLastUsed">TimeLastUsed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference">JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.isDefaultInput">IsDefaultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.javaVersionInput">JavaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.licenseTypeInput">LicenseTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeExpiresInput">TimeExpiresInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.isDefault">IsDefault</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.javaVersion">JavaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.licenseType">LicenseType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeExpires">TimeExpires</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.createdBy"></a>

```csharp
public JmsJavaDownloadsJavaDownloadTokenCreatedByList CreatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList">JmsJavaDownloadsJavaDownloadTokenCreatedByList</a>

---

##### `LastUpdatedBy`<sup>Required</sup> <a name="LastUpdatedBy" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.lastUpdatedBy"></a>

```csharp
public JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList LastUpdatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList">JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeLastUsed`<sup>Required</sup> <a name="TimeLastUsed" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeLastUsed"></a>

```csharp
public string TimeLastUsed { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeouts"></a>

```csharp
public JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference">JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsDefaultInput`<sup>Optional</sup> <a name="IsDefaultInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.isDefaultInput"></a>

```csharp
public object IsDefaultInput { get; }
```

- *Type:* object

---

##### `JavaVersionInput`<sup>Optional</sup> <a name="JavaVersionInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.javaVersionInput"></a>

```csharp
public string JavaVersionInput { get; }
```

- *Type:* string

---

##### `LicenseTypeInput`<sup>Optional</sup> <a name="LicenseTypeInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.licenseTypeInput"></a>

```csharp
public string[] LicenseTypeInput { get; }
```

- *Type:* string[]

---

##### `TimeExpiresInput`<sup>Optional</sup> <a name="TimeExpiresInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeExpiresInput"></a>

```csharp
public string TimeExpiresInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.isDefault"></a>

```csharp
public object IsDefault { get; }
```

- *Type:* object

---

##### `JavaVersion`<sup>Required</sup> <a name="JavaVersion" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.javaVersion"></a>

```csharp
public string JavaVersion { get; }
```

- *Type:* string

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.licenseType"></a>

```csharp
public string[] LicenseType { get; }
```

- *Type:* string[]

---

##### `TimeExpires`<sup>Required</sup> <a name="TimeExpires" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.timeExpires"></a>

```csharp
public string TimeExpires { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadToken.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### JmsJavaDownloadsJavaDownloadTokenConfig <a name="JmsJavaDownloadsJavaDownloadTokenConfig" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsJavaDownloadsJavaDownloadTokenConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string Description,
    string DisplayName,
    string JavaVersion,
    string[] LicenseType,
    string TimeExpires,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object IsDefault = null,
    JmsJavaDownloadsJavaDownloadTokenTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#compartment_id JmsJavaDownloadsJavaDownloadToken#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#description JmsJavaDownloadsJavaDownloadToken#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#display_name JmsJavaDownloadsJavaDownloadToken#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.javaVersion">JavaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#java_version JmsJavaDownloadsJavaDownloadToken#java_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.licenseType">LicenseType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#license_type JmsJavaDownloadsJavaDownloadToken#license_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.timeExpires">TimeExpires</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#time_expires JmsJavaDownloadsJavaDownloadToken#time_expires}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#defined_tags JmsJavaDownloadsJavaDownloadToken#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#freeform_tags JmsJavaDownloadsJavaDownloadToken#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#id JmsJavaDownloadsJavaDownloadToken#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.isDefault">IsDefault</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#is_default JmsJavaDownloadsJavaDownloadToken#is_default}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts">JmsJavaDownloadsJavaDownloadTokenTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#compartment_id JmsJavaDownloadsJavaDownloadToken#compartment_id}.

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#description JmsJavaDownloadsJavaDownloadToken#description}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#display_name JmsJavaDownloadsJavaDownloadToken#display_name}.

---

##### `JavaVersion`<sup>Required</sup> <a name="JavaVersion" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.javaVersion"></a>

```csharp
public string JavaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#java_version JmsJavaDownloadsJavaDownloadToken#java_version}.

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.licenseType"></a>

```csharp
public string[] LicenseType { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#license_type JmsJavaDownloadsJavaDownloadToken#license_type}.

---

##### `TimeExpires`<sup>Required</sup> <a name="TimeExpires" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.timeExpires"></a>

```csharp
public string TimeExpires { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#time_expires JmsJavaDownloadsJavaDownloadToken#time_expires}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#defined_tags JmsJavaDownloadsJavaDownloadToken#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#freeform_tags JmsJavaDownloadsJavaDownloadToken#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#id JmsJavaDownloadsJavaDownloadToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsDefault`<sup>Optional</sup> <a name="IsDefault" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.isDefault"></a>

```csharp
public object IsDefault { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#is_default JmsJavaDownloadsJavaDownloadToken#is_default}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenConfig.property.timeouts"></a>

```csharp
public JmsJavaDownloadsJavaDownloadTokenTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts">JmsJavaDownloadsJavaDownloadTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#timeouts JmsJavaDownloadsJavaDownloadToken#timeouts}

---

### JmsJavaDownloadsJavaDownloadTokenCreatedBy <a name="JmsJavaDownloadsJavaDownloadTokenCreatedBy" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsJavaDownloadsJavaDownloadTokenCreatedBy {

};
```


### JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy <a name="JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy {

};
```


### JmsJavaDownloadsJavaDownloadTokenTimeouts <a name="JmsJavaDownloadsJavaDownloadTokenTimeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsJavaDownloadsJavaDownloadTokenTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#create JmsJavaDownloadsJavaDownloadToken#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#delete JmsJavaDownloadsJavaDownloadToken#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#update JmsJavaDownloadsJavaDownloadToken#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#create JmsJavaDownloadsJavaDownloadToken#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#delete JmsJavaDownloadsJavaDownloadToken#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_token#update JmsJavaDownloadsJavaDownloadToken#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### JmsJavaDownloadsJavaDownloadTokenCreatedByList <a name="JmsJavaDownloadsJavaDownloadTokenCreatedByList" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsJavaDownloadsJavaDownloadTokenCreatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.get"></a>

```csharp
private JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference <a name="JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedBy">JmsJavaDownloadsJavaDownloadTokenCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.internalValue"></a>

```csharp
public JmsJavaDownloadsJavaDownloadTokenCreatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenCreatedBy">JmsJavaDownloadsJavaDownloadTokenCreatedBy</a>

---


### JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList <a name="JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.get"></a>

```csharp
private JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference <a name="JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy">JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.internalValue"></a>

```csharp
public JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy">JmsJavaDownloadsJavaDownloadTokenLastUpdatedBy</a>

---


### JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference <a name="JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadToken.JmsJavaDownloadsJavaDownloadTokenTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



