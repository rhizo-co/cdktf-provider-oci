# `dataOciIdentityDomainsBrandingSettings` Submodule <a name="`dataOciIdentityDomainsBrandingSettings` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsBrandingSettings <a name="DataOciIdentityDomainsBrandingSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings oci_identity_domains_branding_settings}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettings(Construct Scope, string Id, DataOciIdentityDomainsBrandingSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig">DataOciIdentityDomainsBrandingSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig">DataOciIdentityDomainsBrandingSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.resetAttributeSets"></a>

```csharp
private void ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.resetResourceTypeSchemaVersion"></a>

```csharp
private void ResetResourceTypeSchemaVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsBrandingSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsBrandingSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsBrandingSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsBrandingSettings.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsBrandingSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciIdentityDomainsBrandingSettings resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsBrandingSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsBrandingSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsBrandingSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.brandingSettings">BrandingSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.itemsPerPage">ItemsPerPage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.startIndex">StartIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.totalResults">TotalResults</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.attributesInput">AttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.attributes">Attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BrandingSettings`<sup>Required</sup> <a name="BrandingSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.brandingSettings"></a>

```csharp
public DataOciIdentityDomainsBrandingSettingsBrandingSettingsList BrandingSettings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsList</a>

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.itemsPerPage"></a>

```csharp
public double ItemsPerPage { get; }
```

- *Type:* double

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.startIndex"></a>

```csharp
public double StartIndex { get; }
```

- *Type:* double

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.totalResults"></a>

```csharp
public double TotalResults { get; }
```

- *Type:* double

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.attributeSetsInput"></a>

```csharp
public string[] AttributeSetsInput { get; }
```

- *Type:* string[]

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.attributesInput"></a>

```csharp
public string AttributesInput { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.idcsEndpointInput"></a>

```csharp
public string IdcsEndpointInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.resourceTypeSchemaVersionInput"></a>

```csharp
public string ResourceTypeSchemaVersionInput { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.attributes"></a>

```csharp
public string Attributes { get; }
```

- *Type:* string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; }
```

- *Type:* string[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsBrandingSettingsBrandingSettings <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettings {

};
```


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNames <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNames" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNames.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNames {

};
```


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNames <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNames" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNames.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNames {

};
```


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImages <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImages" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImages {

};
```


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTexts <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTexts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTexts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTexts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTexts {

};
```


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedBy <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedBy {

};
```


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedBy <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedBy {

};
```


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsImages <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsImages" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsImages {

};
```


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTexts <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTexts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTexts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTexts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTexts {

};
```


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsMeta <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMeta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsMeta {

};
```


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsTags <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsTags {

};
```


### DataOciIdentityDomainsBrandingSettingsConfig <a name="DataOciIdentityDomainsBrandingSettingsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IdcsEndpoint,
    string Attributes = null,
    string[] AttributeSets = null,
    string Authorization = null,
    string CompartmentId = null,
    string Id = null,
    string ResourceTypeSchemaVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings#idcs_endpoint DataOciIdentityDomainsBrandingSettings#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.attributes">Attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings#attributes DataOciIdentityDomainsBrandingSettings#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings#attribute_sets DataOciIdentityDomainsBrandingSettings#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings#authorization DataOciIdentityDomainsBrandingSettings#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings#compartment_id DataOciIdentityDomainsBrandingSettings#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings#id DataOciIdentityDomainsBrandingSettings#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings#resource_type_schema_version DataOciIdentityDomainsBrandingSettings#resource_type_schema_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings#idcs_endpoint DataOciIdentityDomainsBrandingSettings#idcs_endpoint}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.attributes"></a>

```csharp
public string Attributes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings#attributes DataOciIdentityDomainsBrandingSettings#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings#attribute_sets DataOciIdentityDomainsBrandingSettings#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings#authorization DataOciIdentityDomainsBrandingSettings#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings#compartment_id DataOciIdentityDomainsBrandingSettings#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings#id DataOciIdentityDomainsBrandingSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings#resource_type_schema_version DataOciIdentityDomainsBrandingSettings#resource_type_schema_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.get"></a>

```csharp
private DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNames">DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNames InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNames">DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNames</a>

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.get"></a>

```csharp
private DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNames">DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNames InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNames">DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNames</a>

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.get"></a>

```csharp
private DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImages">DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImages InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImages">DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImages</a>

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.get"></a>

```csharp
private DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTexts">DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTexts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTexts InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTexts">DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTexts</a>

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.get"></a>

```csharp
private DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedBy">DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedBy">DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.get"></a>

```csharp
private DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedBy">DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedBy">DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.get"></a>

```csharp
private DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImages">DataOciIdentityDomainsBrandingSettingsBrandingSettingsImages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsBrandingSettingsBrandingSettingsImages InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImages">DataOciIdentityDomainsBrandingSettingsBrandingSettingsImages</a>

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsList <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.get"></a>

```csharp
private DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.get"></a>

```csharp
private DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTexts">DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTexts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTexts InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTexts">DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTexts</a>

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.get"></a>

```csharp
private DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMeta">DataOciIdentityDomainsBrandingSettingsBrandingSettingsMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsBrandingSettingsBrandingSettingsMeta InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMeta">DataOciIdentityDomainsBrandingSettingsBrandingSettingsMeta</a>

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.attributes">Attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.brandingSettingId">BrandingSettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.companyNames">CompanyNames</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.customBranding">CustomBranding</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.customCssLocation">CustomCssLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.customHtmlLocation">CustomHtmlLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.customTranslation">CustomTranslation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.defaultCompanyNames">DefaultCompanyNames</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.defaultImages">DefaultImages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.defaultLoginTexts">DefaultLoginTexts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.domainOcid">DomainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.enableTermsOfUse">EnableTermsOfUse</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.images">Images</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.isHostedPage">IsHostedPage</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.loginTexts">LoginTexts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.preferredLanguage">PreferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.privacyPolicyUrl">PrivacyPolicyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.termsOfUseUrl">TermsOfUseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettings">DataOciIdentityDomainsBrandingSettingsBrandingSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.attributes"></a>

```csharp
public string Attributes { get; }
```

- *Type:* string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; }
```

- *Type:* string[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `BrandingSettingId`<sup>Required</sup> <a name="BrandingSettingId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.brandingSettingId"></a>

```csharp
public string BrandingSettingId { get; }
```

- *Type:* string

---

##### `CompanyNames`<sup>Required</sup> <a name="CompanyNames" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.companyNames"></a>

```csharp
public DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList CompanyNames { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList</a>

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.compartmentOcid"></a>

```csharp
public string CompartmentOcid { get; }
```

- *Type:* string

---

##### `CustomBranding`<sup>Required</sup> <a name="CustomBranding" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.customBranding"></a>

```csharp
public IResolvable CustomBranding { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CustomCssLocation`<sup>Required</sup> <a name="CustomCssLocation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.customCssLocation"></a>

```csharp
public string CustomCssLocation { get; }
```

- *Type:* string

---

##### `CustomHtmlLocation`<sup>Required</sup> <a name="CustomHtmlLocation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.customHtmlLocation"></a>

```csharp
public string CustomHtmlLocation { get; }
```

- *Type:* string

---

##### `CustomTranslation`<sup>Required</sup> <a name="CustomTranslation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.customTranslation"></a>

```csharp
public string CustomTranslation { get; }
```

- *Type:* string

---

##### `DefaultCompanyNames`<sup>Required</sup> <a name="DefaultCompanyNames" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.defaultCompanyNames"></a>

```csharp
public DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList DefaultCompanyNames { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList</a>

---

##### `DefaultImages`<sup>Required</sup> <a name="DefaultImages" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.defaultImages"></a>

```csharp
public DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList DefaultImages { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList</a>

---

##### `DefaultLoginTexts`<sup>Required</sup> <a name="DefaultLoginTexts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.defaultLoginTexts"></a>

```csharp
public DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList DefaultLoginTexts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList</a>

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.deleteInProgress"></a>

```csharp
public IResolvable DeleteInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.domainOcid"></a>

```csharp
public string DomainOcid { get; }
```

- *Type:* string

---

##### `EnableTermsOfUse`<sup>Required</sup> <a name="EnableTermsOfUse" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.enableTermsOfUse"></a>

```csharp
public IResolvable EnableTermsOfUse { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.idcsCreatedBy"></a>

```csharp
public DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList IdcsCreatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList</a>

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.idcsLastModifiedBy"></a>

```csharp
public DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList IdcsLastModifiedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.idcsLastUpgradedInRelease"></a>

```csharp
public string IdcsLastUpgradedInRelease { get; }
```

- *Type:* string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.idcsPreventedOperations"></a>

```csharp
public string[] IdcsPreventedOperations { get; }
```

- *Type:* string[]

---

##### `Images`<sup>Required</sup> <a name="Images" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.images"></a>

```csharp
public DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList Images { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList</a>

---

##### `IsHostedPage`<sup>Required</sup> <a name="IsHostedPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.isHostedPage"></a>

```csharp
public IResolvable IsHostedPage { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `LoginTexts`<sup>Required</sup> <a name="LoginTexts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.loginTexts"></a>

```csharp
public DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList LoginTexts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList</a>

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.meta"></a>

```csharp
public DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList Meta { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList</a>

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `PreferredLanguage`<sup>Required</sup> <a name="PreferredLanguage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.preferredLanguage"></a>

```csharp
public string PreferredLanguage { get; }
```

- *Type:* string

---

##### `PrivacyPolicyUrl`<sup>Required</sup> <a name="PrivacyPolicyUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.privacyPolicyUrl"></a>

```csharp
public string PrivacyPolicyUrl { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.tags"></a>

```csharp
public DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.tenancyOcid"></a>

```csharp
public string TenancyOcid { get; }
```

- *Type:* string

---

##### `TermsOfUseUrl`<sup>Required</sup> <a name="TermsOfUseUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.termsOfUseUrl"></a>

```csharp
public string TermsOfUseUrl { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsBrandingSettingsBrandingSettings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettings">DataOciIdentityDomainsBrandingSettingsBrandingSettings</a>

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.get"></a>

```csharp
private DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTags">DataOciIdentityDomainsBrandingSettingsBrandingSettingsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsBrandingSettingsBrandingSettingsTags InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTags">DataOciIdentityDomainsBrandingSettingsBrandingSettingsTags</a>

---



