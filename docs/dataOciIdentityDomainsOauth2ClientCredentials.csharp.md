# `dataOciIdentityDomainsOauth2ClientCredentials` Submodule <a name="`dataOciIdentityDomainsOauth2ClientCredentials` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsOauth2ClientCredentials <a name="DataOciIdentityDomainsOauth2ClientCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials oci_identity_domains_oauth2client_credentials}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauth2ClientCredentials(Construct Scope, string Id, DataOciIdentityDomainsOauth2ClientCredentialsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig">DataOciIdentityDomainsOauth2ClientCredentialsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig">DataOciIdentityDomainsOauth2ClientCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetOauth2ClientCredentialCount">ResetOauth2ClientCredentialCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetOauth2ClientCredentialFilter">ResetOauth2ClientCredentialFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetSortOrder">ResetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetStartIndex">ResetStartIndex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetAttributeSets"></a>

```csharp
private void ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOauth2ClientCredentialCount` <a name="ResetOauth2ClientCredentialCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetOauth2ClientCredentialCount"></a>

```csharp
private void ResetOauth2ClientCredentialCount()
```

##### `ResetOauth2ClientCredentialFilter` <a name="ResetOauth2ClientCredentialFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetOauth2ClientCredentialFilter"></a>

```csharp
private void ResetOauth2ClientCredentialFilter()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetResourceTypeSchemaVersion"></a>

```csharp
private void ResetResourceTypeSchemaVersion()
```

##### `ResetSortBy` <a name="ResetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetSortBy"></a>

```csharp
private void ResetSortBy()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetSortOrder"></a>

```csharp
private void ResetSortOrder()
```

##### `ResetStartIndex` <a name="ResetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetStartIndex"></a>

```csharp
private void ResetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsOauth2ClientCredentials resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsOauth2ClientCredentials.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsOauth2ClientCredentials.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsOauth2ClientCredentials.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsOauth2ClientCredentials.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciIdentityDomainsOauth2ClientCredentials resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsOauth2ClientCredentials to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsOauth2ClientCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsOauth2ClientCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.itemsPerPage">ItemsPerPage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.oauth2ClientCredentials">Oauth2ClientCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.totalResults">TotalResults</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.attributesInput">AttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.oauth2ClientCredentialCountInput">Oauth2ClientCredentialCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.oauth2ClientCredentialFilterInput">Oauth2ClientCredentialFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.sortByInput">SortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.sortOrderInput">SortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.startIndexInput">StartIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.attributes">Attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.oauth2ClientCredentialCount">Oauth2ClientCredentialCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.oauth2ClientCredentialFilter">Oauth2ClientCredentialFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.sortBy">SortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.sortOrder">SortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.startIndex">StartIndex</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.itemsPerPage"></a>

```csharp
public double ItemsPerPage { get; }
```

- *Type:* double

---

##### `Oauth2ClientCredentials`<sup>Required</sup> <a name="Oauth2ClientCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.oauth2ClientCredentials"></a>

```csharp
public DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList Oauth2ClientCredentials { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList</a>

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.totalResults"></a>

```csharp
public double TotalResults { get; }
```

- *Type:* double

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.attributeSetsInput"></a>

```csharp
public string[] AttributeSetsInput { get; }
```

- *Type:* string[]

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.attributesInput"></a>

```csharp
public string AttributesInput { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.idcsEndpointInput"></a>

```csharp
public string IdcsEndpointInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Oauth2ClientCredentialCountInput`<sup>Optional</sup> <a name="Oauth2ClientCredentialCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.oauth2ClientCredentialCountInput"></a>

```csharp
public double Oauth2ClientCredentialCountInput { get; }
```

- *Type:* double

---

##### `Oauth2ClientCredentialFilterInput`<sup>Optional</sup> <a name="Oauth2ClientCredentialFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.oauth2ClientCredentialFilterInput"></a>

```csharp
public string Oauth2ClientCredentialFilterInput { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.resourceTypeSchemaVersionInput"></a>

```csharp
public string ResourceTypeSchemaVersionInput { get; }
```

- *Type:* string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.sortByInput"></a>

```csharp
public string SortByInput { get; }
```

- *Type:* string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.sortOrderInput"></a>

```csharp
public string SortOrderInput { get; }
```

- *Type:* string

---

##### `StartIndexInput`<sup>Optional</sup> <a name="StartIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.startIndexInput"></a>

```csharp
public double StartIndexInput { get; }
```

- *Type:* double

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.attributes"></a>

```csharp
public string Attributes { get; }
```

- *Type:* string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; }
```

- *Type:* string[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `Oauth2ClientCredentialCount`<sup>Required</sup> <a name="Oauth2ClientCredentialCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.oauth2ClientCredentialCount"></a>

```csharp
public double Oauth2ClientCredentialCount { get; }
```

- *Type:* double

---

##### `Oauth2ClientCredentialFilter`<sup>Required</sup> <a name="Oauth2ClientCredentialFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.oauth2ClientCredentialFilter"></a>

```csharp
public string Oauth2ClientCredentialFilter { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.sortBy"></a>

```csharp
public string SortBy { get; }
```

- *Type:* string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.sortOrder"></a>

```csharp
public string SortOrder { get; }
```

- *Type:* string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.startIndex"></a>

```csharp
public double StartIndex { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsOauth2ClientCredentialsConfig <a name="DataOciIdentityDomainsOauth2ClientCredentialsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauth2ClientCredentialsConfig {
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
    double Oauth2ClientCredentialCount = null,
    string Oauth2ClientCredentialFilter = null,
    string ResourceTypeSchemaVersion = null,
    string SortBy = null,
    string SortOrder = null,
    double StartIndex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#idcs_endpoint DataOciIdentityDomainsOauth2ClientCredentials#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.attributes">Attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#attributes DataOciIdentityDomainsOauth2ClientCredentials#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#attribute_sets DataOciIdentityDomainsOauth2ClientCredentials#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#authorization DataOciIdentityDomainsOauth2ClientCredentials#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#compartment_id DataOciIdentityDomainsOauth2ClientCredentials#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#id DataOciIdentityDomainsOauth2ClientCredentials#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.oauth2ClientCredentialCount">Oauth2ClientCredentialCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#oauth2client_credential_count DataOciIdentityDomainsOauth2ClientCredentials#oauth2client_credential_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.oauth2ClientCredentialFilter">Oauth2ClientCredentialFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#oauth2client_credential_filter DataOciIdentityDomainsOauth2ClientCredentials#oauth2client_credential_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#resource_type_schema_version DataOciIdentityDomainsOauth2ClientCredentials#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.sortBy">SortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#sort_by DataOciIdentityDomainsOauth2ClientCredentials#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.sortOrder">SortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#sort_order DataOciIdentityDomainsOauth2ClientCredentials#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.startIndex">StartIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#start_index DataOciIdentityDomainsOauth2ClientCredentials#start_index}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#idcs_endpoint DataOciIdentityDomainsOauth2ClientCredentials#idcs_endpoint}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.attributes"></a>

```csharp
public string Attributes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#attributes DataOciIdentityDomainsOauth2ClientCredentials#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#attribute_sets DataOciIdentityDomainsOauth2ClientCredentials#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#authorization DataOciIdentityDomainsOauth2ClientCredentials#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#compartment_id DataOciIdentityDomainsOauth2ClientCredentials#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#id DataOciIdentityDomainsOauth2ClientCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Oauth2ClientCredentialCount`<sup>Optional</sup> <a name="Oauth2ClientCredentialCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.oauth2ClientCredentialCount"></a>

```csharp
public double Oauth2ClientCredentialCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#oauth2client_credential_count DataOciIdentityDomainsOauth2ClientCredentials#oauth2client_credential_count}.

---

##### `Oauth2ClientCredentialFilter`<sup>Optional</sup> <a name="Oauth2ClientCredentialFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.oauth2ClientCredentialFilter"></a>

```csharp
public string Oauth2ClientCredentialFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#oauth2client_credential_filter DataOciIdentityDomainsOauth2ClientCredentials#oauth2client_credential_filter}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#resource_type_schema_version DataOciIdentityDomainsOauth2ClientCredentials#resource_type_schema_version}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.sortBy"></a>

```csharp
public string SortBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#sort_by DataOciIdentityDomainsOauth2ClientCredentials#sort_by}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.sortOrder"></a>

```csharp
public string SortOrder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#sort_order DataOciIdentityDomainsOauth2ClientCredentials#sort_order}.

---

##### `StartIndex`<sup>Optional</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.startIndex"></a>

```csharp
public double StartIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#start_index DataOciIdentityDomainsOauth2ClientCredentials#start_index}.

---

### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials {

};
```


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy {

};
```


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy {

};
```


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta {

};
```


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes {

};
```


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags {

};
```


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser {

};
```


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.get"></a>

```csharp
private DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.get"></a>

```csharp
private DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.get"></a>

```csharp
private DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.get"></a>

```csharp
private DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta</a>

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.attributes">Attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.domainOcid">DomainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.expiresOn">ExpiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.isResetSecret">IsResetSecret</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.scopes">Scopes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUser">UrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.user">User</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.attributes"></a>

```csharp
public string Attributes { get; }
```

- *Type:* string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; }
```

- *Type:* string[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.compartmentOcid"></a>

```csharp
public string CompartmentOcid { get; }
```

- *Type:* string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.deleteInProgress"></a>

```csharp
public IResolvable DeleteInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.domainOcid"></a>

```csharp
public string DomainOcid { get; }
```

- *Type:* string

---

##### `ExpiresOn`<sup>Required</sup> <a name="ExpiresOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.expiresOn"></a>

```csharp
public string ExpiresOn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.idcsCreatedBy"></a>

```csharp
public DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList IdcsCreatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList</a>

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.idcsLastModifiedBy"></a>

```csharp
public DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList IdcsLastModifiedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.idcsLastUpgradedInRelease"></a>

```csharp
public string IdcsLastUpgradedInRelease { get; }
```

- *Type:* string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.idcsPreventedOperations"></a>

```csharp
public string[] IdcsPreventedOperations { get; }
```

- *Type:* string[]

---

##### `IsResetSecret`<sup>Required</sup> <a name="IsResetSecret" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.isResetSecret"></a>

```csharp
public IResolvable IsResetSecret { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.meta"></a>

```csharp
public DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList Meta { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.scopes"></a>

```csharp
public DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList Scopes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.tags"></a>

```csharp
public DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.tenancyOcid"></a>

```csharp
public string TenancyOcid { get; }
```

- *Type:* string

---

##### `UrnietfparamsscimschemasoracleidcsextensionselfChangeUser`<sup>Required</sup> <a name="UrnietfparamsscimschemasoracleidcsextensionselfChangeUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUser"></a>

```csharp
public DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList UrnietfparamsscimschemasoracleidcsextensionselfChangeUser { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList</a>

---

##### `User`<sup>Required</sup> <a name="User" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.user"></a>

```csharp
public DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList User { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials</a>

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.get"></a>

```csharp
private DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.property.audience">Audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.property.audience"></a>

```csharp
public string Audience { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes</a>

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.get"></a>

```csharp
private DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags</a>

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.get"></a>

```csharp
private DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.allowSelfChange">AllowSelfChange</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowSelfChange`<sup>Required</sup> <a name="AllowSelfChange" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.allowSelfChange"></a>

```csharp
public IResolvable AllowSelfChange { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a>

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.get"></a>

```csharp
private DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser</a>

---



