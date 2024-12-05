# `dataOciIdentityDomainsSelfRegistrationProfile` Submodule <a name="`dataOciIdentityDomainsSelfRegistrationProfile` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsSelfRegistrationProfile <a name="DataOciIdentityDomainsSelfRegistrationProfile" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile oci_identity_domains_self_registration_profile}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfile(Construct Scope, string Id, DataOciIdentityDomainsSelfRegistrationProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig">DataOciIdentityDomainsSelfRegistrationProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig">DataOciIdentityDomainsSelfRegistrationProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.resetAttributeSets"></a>

```csharp
private void ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.resetResourceTypeSchemaVersion"></a>

```csharp
private void ResetResourceTypeSchemaVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsSelfRegistrationProfile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsSelfRegistrationProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsSelfRegistrationProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsSelfRegistrationProfile.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsSelfRegistrationProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciIdentityDomainsSelfRegistrationProfile resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsSelfRegistrationProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsSelfRegistrationProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsSelfRegistrationProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.activationEmailRequired">ActivationEmailRequired</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.active">Active</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.afterSubmitText">AfterSubmitText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList">DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.allowedEmailDomains">AllowedEmailDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.compartmentOcid">CompartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.consentText">ConsentText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList">DataOciIdentityDomainsSelfRegistrationProfileConsentTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.consentTextPresent">ConsentTextPresent</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.defaultGroups">DefaultGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList">DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.deleteInProgress">DeleteInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.disallowedEmailDomains">DisallowedEmailDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.displayName">DisplayName</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList">DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.domainOcid">DomainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.emailTemplate">EmailTemplate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList">DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.footerLogo">FooterLogo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.footerText">FooterText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList">DataOciIdentityDomainsSelfRegistrationProfileFooterTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.headerLogo">HeaderLogo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.headerText">HeaderText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList">DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList">DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList">DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList">DataOciIdentityDomainsSelfRegistrationProfileMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.numberOfDaysRedirectUrlIsValid">NumberOfDaysRedirectUrlIsValid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.redirectUrl">RedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.showOnLoginPage">ShowOnLoginPage</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList">DataOciIdentityDomainsSelfRegistrationProfileTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.tenancyOcid">TenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.userAttributes">UserAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList">DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.attributesInput">AttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.selfRegistrationProfileIdInput">SelfRegistrationProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.attributes">Attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.selfRegistrationProfileId">SelfRegistrationProfileId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ActivationEmailRequired`<sup>Required</sup> <a name="ActivationEmailRequired" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.activationEmailRequired"></a>

```csharp
public IResolvable ActivationEmailRequired { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Active`<sup>Required</sup> <a name="Active" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.active"></a>

```csharp
public IResolvable Active { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AfterSubmitText`<sup>Required</sup> <a name="AfterSubmitText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.afterSubmitText"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList AfterSubmitText { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList">DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList</a>

---

##### `AllowedEmailDomains`<sup>Required</sup> <a name="AllowedEmailDomains" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.allowedEmailDomains"></a>

```csharp
public string[] AllowedEmailDomains { get; }
```

- *Type:* string[]

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.compartmentOcid"></a>

```csharp
public string CompartmentOcid { get; }
```

- *Type:* string

---

##### `ConsentText`<sup>Required</sup> <a name="ConsentText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.consentText"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfileConsentTextList ConsentText { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList">DataOciIdentityDomainsSelfRegistrationProfileConsentTextList</a>

---

##### `ConsentTextPresent`<sup>Required</sup> <a name="ConsentTextPresent" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.consentTextPresent"></a>

```csharp
public IResolvable ConsentTextPresent { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DefaultGroups`<sup>Required</sup> <a name="DefaultGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.defaultGroups"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList DefaultGroups { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList">DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList</a>

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.deleteInProgress"></a>

```csharp
public IResolvable DeleteInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DisallowedEmailDomains`<sup>Required</sup> <a name="DisallowedEmailDomains" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.disallowedEmailDomains"></a>

```csharp
public string[] DisallowedEmailDomains { get; }
```

- *Type:* string[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.displayName"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList DisplayName { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList">DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList</a>

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.domainOcid"></a>

```csharp
public string DomainOcid { get; }
```

- *Type:* string

---

##### `EmailTemplate`<sup>Required</sup> <a name="EmailTemplate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.emailTemplate"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList EmailTemplate { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList">DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList</a>

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `FooterLogo`<sup>Required</sup> <a name="FooterLogo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.footerLogo"></a>

```csharp
public string FooterLogo { get; }
```

- *Type:* string

---

##### `FooterText`<sup>Required</sup> <a name="FooterText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.footerText"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfileFooterTextList FooterText { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList">DataOciIdentityDomainsSelfRegistrationProfileFooterTextList</a>

---

##### `HeaderLogo`<sup>Required</sup> <a name="HeaderLogo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.headerLogo"></a>

```csharp
public string HeaderLogo { get; }
```

- *Type:* string

---

##### `HeaderText`<sup>Required</sup> <a name="HeaderText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.headerText"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList HeaderText { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList">DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsCreatedBy"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList IdcsCreatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList">DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList</a>

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsLastModifiedBy"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList IdcsLastModifiedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList">DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsLastUpgradedInRelease"></a>

```csharp
public string IdcsLastUpgradedInRelease { get; }
```

- *Type:* string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsPreventedOperations"></a>

```csharp
public string[] IdcsPreventedOperations { get; }
```

- *Type:* string[]

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.meta"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfileMetaList Meta { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList">DataOciIdentityDomainsSelfRegistrationProfileMetaList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NumberOfDaysRedirectUrlIsValid`<sup>Required</sup> <a name="NumberOfDaysRedirectUrlIsValid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.numberOfDaysRedirectUrlIsValid"></a>

```csharp
public double NumberOfDaysRedirectUrlIsValid { get; }
```

- *Type:* double

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.redirectUrl"></a>

```csharp
public string RedirectUrl { get; }
```

- *Type:* string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `ShowOnLoginPage`<sup>Required</sup> <a name="ShowOnLoginPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.showOnLoginPage"></a>

```csharp
public IResolvable ShowOnLoginPage { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.tags"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfileTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList">DataOciIdentityDomainsSelfRegistrationProfileTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.tenancyOcid"></a>

```csharp
public string TenancyOcid { get; }
```

- *Type:* string

---

##### `UserAttributes`<sup>Required</sup> <a name="UserAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.userAttributes"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList UserAttributes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList">DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList</a>

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.attributeSetsInput"></a>

```csharp
public string[] AttributeSetsInput { get; }
```

- *Type:* string[]

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.attributesInput"></a>

```csharp
public string AttributesInput { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsEndpointInput"></a>

```csharp
public string IdcsEndpointInput { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.resourceTypeSchemaVersionInput"></a>

```csharp
public string ResourceTypeSchemaVersionInput { get; }
```

- *Type:* string

---

##### `SelfRegistrationProfileIdInput`<sup>Optional</sup> <a name="SelfRegistrationProfileIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.selfRegistrationProfileIdInput"></a>

```csharp
public string SelfRegistrationProfileIdInput { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.attributes"></a>

```csharp
public string Attributes { get; }
```

- *Type:* string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; }
```

- *Type:* string[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `SelfRegistrationProfileId`<sup>Required</sup> <a name="SelfRegistrationProfileId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.selfRegistrationProfileId"></a>

```csharp
public string SelfRegistrationProfileId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitText <a name="DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitText.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitText {

};
```


### DataOciIdentityDomainsSelfRegistrationProfileConfig <a name="DataOciIdentityDomainsSelfRegistrationProfileConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IdcsEndpoint,
    string SelfRegistrationProfileId,
    string Attributes = null,
    string[] AttributeSets = null,
    string Authorization = null,
    string ResourceTypeSchemaVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#idcs_endpoint DataOciIdentityDomainsSelfRegistrationProfile#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.selfRegistrationProfileId">SelfRegistrationProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#self_registration_profile_id DataOciIdentityDomainsSelfRegistrationProfile#self_registration_profile_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.attributes">Attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#attributes DataOciIdentityDomainsSelfRegistrationProfile#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#attribute_sets DataOciIdentityDomainsSelfRegistrationProfile#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#authorization DataOciIdentityDomainsSelfRegistrationProfile#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#resource_type_schema_version DataOciIdentityDomainsSelfRegistrationProfile#resource_type_schema_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#idcs_endpoint DataOciIdentityDomainsSelfRegistrationProfile#idcs_endpoint}.

---

##### `SelfRegistrationProfileId`<sup>Required</sup> <a name="SelfRegistrationProfileId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.selfRegistrationProfileId"></a>

```csharp
public string SelfRegistrationProfileId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#self_registration_profile_id DataOciIdentityDomainsSelfRegistrationProfile#self_registration_profile_id}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.attributes"></a>

```csharp
public string Attributes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#attributes DataOciIdentityDomainsSelfRegistrationProfile#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#attribute_sets DataOciIdentityDomainsSelfRegistrationProfile#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#authorization DataOciIdentityDomainsSelfRegistrationProfile#authorization}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#resource_type_schema_version DataOciIdentityDomainsSelfRegistrationProfile#resource_type_schema_version}.

---

### DataOciIdentityDomainsSelfRegistrationProfileConsentText <a name="DataOciIdentityDomainsSelfRegistrationProfileConsentText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentText.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileConsentText {

};
```


### DataOciIdentityDomainsSelfRegistrationProfileDefaultGroups <a name="DataOciIdentityDomainsSelfRegistrationProfileDefaultGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileDefaultGroups {

};
```


### DataOciIdentityDomainsSelfRegistrationProfileDisplayName <a name="DataOciIdentityDomainsSelfRegistrationProfileDisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayName"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayName.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileDisplayName {

};
```


### DataOciIdentityDomainsSelfRegistrationProfileEmailTemplate <a name="DataOciIdentityDomainsSelfRegistrationProfileEmailTemplate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileEmailTemplate {

};
```


### DataOciIdentityDomainsSelfRegistrationProfileFooterText <a name="DataOciIdentityDomainsSelfRegistrationProfileFooterText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterText.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileFooterText {

};
```


### DataOciIdentityDomainsSelfRegistrationProfileHeaderText <a name="DataOciIdentityDomainsSelfRegistrationProfileHeaderText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderText.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileHeaderText {

};
```


### DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedBy <a name="DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedBy {

};
```


### DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy <a name="DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy {

};
```


### DataOciIdentityDomainsSelfRegistrationProfileMeta <a name="DataOciIdentityDomainsSelfRegistrationProfileMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMeta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileMeta {

};
```


### DataOciIdentityDomainsSelfRegistrationProfileTags <a name="DataOciIdentityDomainsSelfRegistrationProfileTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileTags {

};
```


### DataOciIdentityDomainsSelfRegistrationProfileUserAttributes <a name="DataOciIdentityDomainsSelfRegistrationProfileUserAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileUserAttributes {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList <a name="DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.get"></a>

```csharp
private DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.default">Default</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitText">DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.default"></a>

```csharp
public IResolvable Default { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitText InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitText">DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitText</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileConsentTextList <a name="DataOciIdentityDomainsSelfRegistrationProfileConsentTextList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileConsentTextList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.get"></a>

```csharp
private DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.default">Default</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentText">DataOciIdentityDomainsSelfRegistrationProfileConsentText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.default"></a>

```csharp
public IResolvable Default { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfileConsentText InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentText">DataOciIdentityDomainsSelfRegistrationProfileConsentText</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList <a name="DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.get"></a>

```csharp
private DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroups">DataOciIdentityDomainsSelfRegistrationProfileDefaultGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfileDefaultGroups InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroups">DataOciIdentityDomainsSelfRegistrationProfileDefaultGroups</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList <a name="DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.get"></a>

```csharp
private DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.default">Default</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayName">DataOciIdentityDomainsSelfRegistrationProfileDisplayName</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.default"></a>

```csharp
public IResolvable Default { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfileDisplayName InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayName">DataOciIdentityDomainsSelfRegistrationProfileDisplayName</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList <a name="DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.get"></a>

```csharp
private DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplate">DataOciIdentityDomainsSelfRegistrationProfileEmailTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfileEmailTemplate InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplate">DataOciIdentityDomainsSelfRegistrationProfileEmailTemplate</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileFooterTextList <a name="DataOciIdentityDomainsSelfRegistrationProfileFooterTextList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileFooterTextList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.get"></a>

```csharp
private DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.default">Default</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterText">DataOciIdentityDomainsSelfRegistrationProfileFooterText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.default"></a>

```csharp
public IResolvable Default { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfileFooterText InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterText">DataOciIdentityDomainsSelfRegistrationProfileFooterText</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList <a name="DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.get"></a>

```csharp
private DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.default">Default</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderText">DataOciIdentityDomainsSelfRegistrationProfileHeaderText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.default"></a>

```csharp
public IResolvable Default { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfileHeaderText InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderText">DataOciIdentityDomainsSelfRegistrationProfileHeaderText</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList <a name="DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.get"></a>

```csharp
private DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedBy">DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedBy">DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedBy</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList <a name="DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.get"></a>

```csharp
private DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy">DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy">DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileMetaList <a name="DataOciIdentityDomainsSelfRegistrationProfileMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileMetaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.get"></a>

```csharp
private DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMeta">DataOciIdentityDomainsSelfRegistrationProfileMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfileMeta InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMeta">DataOciIdentityDomainsSelfRegistrationProfileMeta</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileTagsList <a name="DataOciIdentityDomainsSelfRegistrationProfileTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.get"></a>

```csharp
private DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTags">DataOciIdentityDomainsSelfRegistrationProfileTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfileTags InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTags">DataOciIdentityDomainsSelfRegistrationProfileTags</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList <a name="DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.get"></a>

```csharp
private DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.deletable">Deletable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fullyQualifiedAttributeName">FullyQualifiedAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.seqNumber">SeqNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributes">DataOciIdentityDomainsSelfRegistrationProfileUserAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Deletable`<sup>Required</sup> <a name="Deletable" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.deletable"></a>

```csharp
public IResolvable Deletable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `FullyQualifiedAttributeName`<sup>Required</sup> <a name="FullyQualifiedAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fullyQualifiedAttributeName"></a>

```csharp
public string FullyQualifiedAttributeName { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `SeqNumber`<sup>Required</sup> <a name="SeqNumber" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.seqNumber"></a>

```csharp
public double SeqNumber { get; }
```

- *Type:* double

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfileUserAttributes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributes">DataOciIdentityDomainsSelfRegistrationProfileUserAttributes</a>

---



