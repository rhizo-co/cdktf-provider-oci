# `dataOciIdentityDomainsSelfRegistrationProfiles` Submodule <a name="`dataOciIdentityDomainsSelfRegistrationProfiles` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsSelfRegistrationProfiles <a name="DataOciIdentityDomainsSelfRegistrationProfiles" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles oci_identity_domains_self_registration_profiles}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfiles(Construct Scope, string Id, DataOciIdentityDomainsSelfRegistrationProfilesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig">DataOciIdentityDomainsSelfRegistrationProfilesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig">DataOciIdentityDomainsSelfRegistrationProfilesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSelfRegistrationProfileCount">ResetSelfRegistrationProfileCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSelfRegistrationProfileFilter">ResetSelfRegistrationProfileFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSortOrder">ResetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetStartIndex">ResetStartIndex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetAttributeSets"></a>

```csharp
private void ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetResourceTypeSchemaVersion"></a>

```csharp
private void ResetResourceTypeSchemaVersion()
```

##### `ResetSelfRegistrationProfileCount` <a name="ResetSelfRegistrationProfileCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSelfRegistrationProfileCount"></a>

```csharp
private void ResetSelfRegistrationProfileCount()
```

##### `ResetSelfRegistrationProfileFilter` <a name="ResetSelfRegistrationProfileFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSelfRegistrationProfileFilter"></a>

```csharp
private void ResetSelfRegistrationProfileFilter()
```

##### `ResetSortBy` <a name="ResetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSortBy"></a>

```csharp
private void ResetSortBy()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSortOrder"></a>

```csharp
private void ResetSortOrder()
```

##### `ResetStartIndex` <a name="ResetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetStartIndex"></a>

```csharp
private void ResetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsSelfRegistrationProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsSelfRegistrationProfiles.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsSelfRegistrationProfiles.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsSelfRegistrationProfiles.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsSelfRegistrationProfiles.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciIdentityDomainsSelfRegistrationProfiles resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsSelfRegistrationProfiles to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsSelfRegistrationProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsSelfRegistrationProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.itemsPerPage">ItemsPerPage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfiles">SelfRegistrationProfiles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.totalResults">TotalResults</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributesInput">AttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileCountInput">SelfRegistrationProfileCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileFilterInput">SelfRegistrationProfileFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortByInput">SortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortOrderInput">SortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.startIndexInput">StartIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributes">Attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileCount">SelfRegistrationProfileCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileFilter">SelfRegistrationProfileFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortBy">SortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortOrder">SortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.startIndex">StartIndex</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.itemsPerPage"></a>

```csharp
public double ItemsPerPage { get; }
```

- *Type:* double

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `SelfRegistrationProfiles`<sup>Required</sup> <a name="SelfRegistrationProfiles" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfiles"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList SelfRegistrationProfiles { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList</a>

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.totalResults"></a>

```csharp
public double TotalResults { get; }
```

- *Type:* double

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributeSetsInput"></a>

```csharp
public string[] AttributeSetsInput { get; }
```

- *Type:* string[]

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributesInput"></a>

```csharp
public string AttributesInput { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.idcsEndpointInput"></a>

```csharp
public string IdcsEndpointInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.resourceTypeSchemaVersionInput"></a>

```csharp
public string ResourceTypeSchemaVersionInput { get; }
```

- *Type:* string

---

##### `SelfRegistrationProfileCountInput`<sup>Optional</sup> <a name="SelfRegistrationProfileCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileCountInput"></a>

```csharp
public double SelfRegistrationProfileCountInput { get; }
```

- *Type:* double

---

##### `SelfRegistrationProfileFilterInput`<sup>Optional</sup> <a name="SelfRegistrationProfileFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileFilterInput"></a>

```csharp
public string SelfRegistrationProfileFilterInput { get; }
```

- *Type:* string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortByInput"></a>

```csharp
public string SortByInput { get; }
```

- *Type:* string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortOrderInput"></a>

```csharp
public string SortOrderInput { get; }
```

- *Type:* string

---

##### `StartIndexInput`<sup>Optional</sup> <a name="StartIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.startIndexInput"></a>

```csharp
public double StartIndexInput { get; }
```

- *Type:* double

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributes"></a>

```csharp
public string Attributes { get; }
```

- *Type:* string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; }
```

- *Type:* string[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `SelfRegistrationProfileCount`<sup>Required</sup> <a name="SelfRegistrationProfileCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileCount"></a>

```csharp
public double SelfRegistrationProfileCount { get; }
```

- *Type:* double

---

##### `SelfRegistrationProfileFilter`<sup>Required</sup> <a name="SelfRegistrationProfileFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileFilter"></a>

```csharp
public string SelfRegistrationProfileFilter { get; }
```

- *Type:* string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortBy"></a>

```csharp
public string SortBy { get; }
```

- *Type:* string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortOrder"></a>

```csharp
public string SortOrder { get; }
```

- *Type:* string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.startIndex"></a>

```csharp
public double StartIndex { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsSelfRegistrationProfilesConfig <a name="DataOciIdentityDomainsSelfRegistrationProfilesConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesConfig {
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
    string ResourceTypeSchemaVersion = null,
    double SelfRegistrationProfileCount = null,
    string SelfRegistrationProfileFilter = null,
    string SortBy = null,
    string SortOrder = null,
    double StartIndex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#idcs_endpoint DataOciIdentityDomainsSelfRegistrationProfiles#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.attributes">Attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#attributes DataOciIdentityDomainsSelfRegistrationProfiles#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#attribute_sets DataOciIdentityDomainsSelfRegistrationProfiles#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#authorization DataOciIdentityDomainsSelfRegistrationProfiles#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#compartment_id DataOciIdentityDomainsSelfRegistrationProfiles#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#id DataOciIdentityDomainsSelfRegistrationProfiles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#resource_type_schema_version DataOciIdentityDomainsSelfRegistrationProfiles#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.selfRegistrationProfileCount">SelfRegistrationProfileCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#self_registration_profile_count DataOciIdentityDomainsSelfRegistrationProfiles#self_registration_profile_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.selfRegistrationProfileFilter">SelfRegistrationProfileFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#self_registration_profile_filter DataOciIdentityDomainsSelfRegistrationProfiles#self_registration_profile_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.sortBy">SortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#sort_by DataOciIdentityDomainsSelfRegistrationProfiles#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.sortOrder">SortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#sort_order DataOciIdentityDomainsSelfRegistrationProfiles#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.startIndex">StartIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#start_index DataOciIdentityDomainsSelfRegistrationProfiles#start_index}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#idcs_endpoint DataOciIdentityDomainsSelfRegistrationProfiles#idcs_endpoint}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.attributes"></a>

```csharp
public string Attributes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#attributes DataOciIdentityDomainsSelfRegistrationProfiles#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#attribute_sets DataOciIdentityDomainsSelfRegistrationProfiles#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#authorization DataOciIdentityDomainsSelfRegistrationProfiles#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#compartment_id DataOciIdentityDomainsSelfRegistrationProfiles#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#id DataOciIdentityDomainsSelfRegistrationProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#resource_type_schema_version DataOciIdentityDomainsSelfRegistrationProfiles#resource_type_schema_version}.

---

##### `SelfRegistrationProfileCount`<sup>Optional</sup> <a name="SelfRegistrationProfileCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.selfRegistrationProfileCount"></a>

```csharp
public double SelfRegistrationProfileCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#self_registration_profile_count DataOciIdentityDomainsSelfRegistrationProfiles#self_registration_profile_count}.

---

##### `SelfRegistrationProfileFilter`<sup>Optional</sup> <a name="SelfRegistrationProfileFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.selfRegistrationProfileFilter"></a>

```csharp
public string SelfRegistrationProfileFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#self_registration_profile_filter DataOciIdentityDomainsSelfRegistrationProfiles#self_registration_profile_filter}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.sortBy"></a>

```csharp
public string SortBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#sort_by DataOciIdentityDomainsSelfRegistrationProfiles#sort_by}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.sortOrder"></a>

```csharp
public string SortOrder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#sort_order DataOciIdentityDomainsSelfRegistrationProfiles#sort_order}.

---

##### `StartIndex`<sup>Optional</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.startIndex"></a>

```csharp
public double StartIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#start_index DataOciIdentityDomainsSelfRegistrationProfiles#start_index}.

---

### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles {

};
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText {

};
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText {

};
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups {

};
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName {

};
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate {

};
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText {

};
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText {

};
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy {

};
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy {

};
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta {

};
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags {

};
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.get"></a>

```csharp
private DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.default">Default</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.default"></a>

```csharp
public IResolvable Default { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.get"></a>

```csharp
private DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.default">Default</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.default"></a>

```csharp
public IResolvable Default { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.get"></a>

```csharp
private DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.get"></a>

```csharp
private DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.default">Default</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.default"></a>

```csharp
public IResolvable Default { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.get"></a>

```csharp
private DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.get"></a>

```csharp
private DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.default">Default</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.default"></a>

```csharp
public IResolvable Default { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.get"></a>

```csharp
private DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.default">Default</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.default"></a>

```csharp
public IResolvable Default { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.get"></a>

```csharp
private DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.get"></a>

```csharp
private DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.get"></a>

```csharp
private DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.get"></a>

```csharp
private DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.activationEmailRequired">ActivationEmailRequired</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.active">Active</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.afterSubmitText">AfterSubmitText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.allowedEmailDomains">AllowedEmailDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.attributes">Attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.consentText">ConsentText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.consentTextPresent">ConsentTextPresent</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.defaultGroups">DefaultGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.disallowedEmailDomains">DisallowedEmailDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.displayName">DisplayName</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.domainOcid">DomainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.emailTemplate">EmailTemplate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.footerLogo">FooterLogo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.footerText">FooterText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.headerLogo">HeaderLogo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.headerText">HeaderText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.numberOfDaysRedirectUrlIsValid">NumberOfDaysRedirectUrlIsValid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.redirectUrl">RedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.showOnLoginPage">ShowOnLoginPage</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.userAttributes">UserAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActivationEmailRequired`<sup>Required</sup> <a name="ActivationEmailRequired" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.activationEmailRequired"></a>

```csharp
public IResolvable ActivationEmailRequired { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Active`<sup>Required</sup> <a name="Active" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.active"></a>

```csharp
public IResolvable Active { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AfterSubmitText`<sup>Required</sup> <a name="AfterSubmitText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.afterSubmitText"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList AfterSubmitText { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList</a>

---

##### `AllowedEmailDomains`<sup>Required</sup> <a name="AllowedEmailDomains" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.allowedEmailDomains"></a>

```csharp
public string[] AllowedEmailDomains { get; }
```

- *Type:* string[]

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.attributes"></a>

```csharp
public string Attributes { get; }
```

- *Type:* string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; }
```

- *Type:* string[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.compartmentOcid"></a>

```csharp
public string CompartmentOcid { get; }
```

- *Type:* string

---

##### `ConsentText`<sup>Required</sup> <a name="ConsentText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.consentText"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList ConsentText { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList</a>

---

##### `ConsentTextPresent`<sup>Required</sup> <a name="ConsentTextPresent" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.consentTextPresent"></a>

```csharp
public IResolvable ConsentTextPresent { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DefaultGroups`<sup>Required</sup> <a name="DefaultGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.defaultGroups"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList DefaultGroups { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList</a>

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.deleteInProgress"></a>

```csharp
public IResolvable DeleteInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DisallowedEmailDomains`<sup>Required</sup> <a name="DisallowedEmailDomains" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.disallowedEmailDomains"></a>

```csharp
public string[] DisallowedEmailDomains { get; }
```

- *Type:* string[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.displayName"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList DisplayName { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList</a>

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.domainOcid"></a>

```csharp
public string DomainOcid { get; }
```

- *Type:* string

---

##### `EmailTemplate`<sup>Required</sup> <a name="EmailTemplate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.emailTemplate"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList EmailTemplate { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList</a>

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `FooterLogo`<sup>Required</sup> <a name="FooterLogo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.footerLogo"></a>

```csharp
public string FooterLogo { get; }
```

- *Type:* string

---

##### `FooterText`<sup>Required</sup> <a name="FooterText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.footerText"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList FooterText { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList</a>

---

##### `HeaderLogo`<sup>Required</sup> <a name="HeaderLogo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.headerLogo"></a>

```csharp
public string HeaderLogo { get; }
```

- *Type:* string

---

##### `HeaderText`<sup>Required</sup> <a name="HeaderText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.headerText"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList HeaderText { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsCreatedBy"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList IdcsCreatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList</a>

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsLastModifiedBy"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList IdcsLastModifiedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsLastUpgradedInRelease"></a>

```csharp
public string IdcsLastUpgradedInRelease { get; }
```

- *Type:* string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsPreventedOperations"></a>

```csharp
public string[] IdcsPreventedOperations { get; }
```

- *Type:* string[]

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.meta"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList Meta { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NumberOfDaysRedirectUrlIsValid`<sup>Required</sup> <a name="NumberOfDaysRedirectUrlIsValid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.numberOfDaysRedirectUrlIsValid"></a>

```csharp
public double NumberOfDaysRedirectUrlIsValid { get; }
```

- *Type:* double

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.redirectUrl"></a>

```csharp
public string RedirectUrl { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `ShowOnLoginPage`<sup>Required</sup> <a name="ShowOnLoginPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.showOnLoginPage"></a>

```csharp
public IResolvable ShowOnLoginPage { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.tags"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.tenancyOcid"></a>

```csharp
public string TenancyOcid { get; }
```

- *Type:* string

---

##### `UserAttributes`<sup>Required</sup> <a name="UserAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.userAttributes"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList UserAttributes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.get"></a>

```csharp
private DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.get"></a>

```csharp
private DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.deletable">Deletable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.fullyQualifiedAttributeName">FullyQualifiedAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.seqNumber">SeqNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Deletable`<sup>Required</sup> <a name="Deletable" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.deletable"></a>

```csharp
public IResolvable Deletable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `FullyQualifiedAttributeName`<sup>Required</sup> <a name="FullyQualifiedAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.fullyQualifiedAttributeName"></a>

```csharp
public string FullyQualifiedAttributeName { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `SeqNumber`<sup>Required</sup> <a name="SeqNumber" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.seqNumber"></a>

```csharp
public double SeqNumber { get; }
```

- *Type:* double

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes</a>

---



