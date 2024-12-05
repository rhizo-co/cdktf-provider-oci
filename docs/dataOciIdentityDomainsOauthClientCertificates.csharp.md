# `dataOciIdentityDomainsOauthClientCertificates` Submodule <a name="`dataOciIdentityDomainsOauthClientCertificates` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsOauthClientCertificates <a name="DataOciIdentityDomainsOauthClientCertificates" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates oci_identity_domains_oauth_client_certificates}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauthClientCertificates(Construct Scope, string Id, DataOciIdentityDomainsOauthClientCertificatesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig">DataOciIdentityDomainsOauthClientCertificatesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig">DataOciIdentityDomainsOauthClientCertificatesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetOauthClientCertificateCount">ResetOauthClientCertificateCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetOauthClientCertificateFilter">ResetOauthClientCertificateFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetSortOrder">ResetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetStartIndex">ResetStartIndex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOauthClientCertificateCount` <a name="ResetOauthClientCertificateCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetOauthClientCertificateCount"></a>

```csharp
private void ResetOauthClientCertificateCount()
```

##### `ResetOauthClientCertificateFilter` <a name="ResetOauthClientCertificateFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetOauthClientCertificateFilter"></a>

```csharp
private void ResetOauthClientCertificateFilter()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetResourceTypeSchemaVersion"></a>

```csharp
private void ResetResourceTypeSchemaVersion()
```

##### `ResetSortBy` <a name="ResetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetSortBy"></a>

```csharp
private void ResetSortBy()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetSortOrder"></a>

```csharp
private void ResetSortOrder()
```

##### `ResetStartIndex` <a name="ResetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetStartIndex"></a>

```csharp
private void ResetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsOauthClientCertificates resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsOauthClientCertificates.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsOauthClientCertificates.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsOauthClientCertificates.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsOauthClientCertificates.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciIdentityDomainsOauthClientCertificates resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsOauthClientCertificates to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsOauthClientCertificates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsOauthClientCertificates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.itemsPerPage">ItemsPerPage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.oauthClientCertificates">OauthClientCertificates</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.totalResults">TotalResults</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.oauthClientCertificateCountInput">OauthClientCertificateCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.oauthClientCertificateFilterInput">OauthClientCertificateFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.sortByInput">SortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.sortOrderInput">SortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.startIndexInput">StartIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.oauthClientCertificateCount">OauthClientCertificateCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.oauthClientCertificateFilter">OauthClientCertificateFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.sortBy">SortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.sortOrder">SortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.startIndex">StartIndex</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.itemsPerPage"></a>

```csharp
public double ItemsPerPage { get; }
```

- *Type:* double

---

##### `OauthClientCertificates`<sup>Required</sup> <a name="OauthClientCertificates" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.oauthClientCertificates"></a>

```csharp
public DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList OauthClientCertificates { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList</a>

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.totalResults"></a>

```csharp
public double TotalResults { get; }
```

- *Type:* double

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.idcsEndpointInput"></a>

```csharp
public string IdcsEndpointInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OauthClientCertificateCountInput`<sup>Optional</sup> <a name="OauthClientCertificateCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.oauthClientCertificateCountInput"></a>

```csharp
public double OauthClientCertificateCountInput { get; }
```

- *Type:* double

---

##### `OauthClientCertificateFilterInput`<sup>Optional</sup> <a name="OauthClientCertificateFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.oauthClientCertificateFilterInput"></a>

```csharp
public string OauthClientCertificateFilterInput { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.resourceTypeSchemaVersionInput"></a>

```csharp
public string ResourceTypeSchemaVersionInput { get; }
```

- *Type:* string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.sortByInput"></a>

```csharp
public string SortByInput { get; }
```

- *Type:* string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.sortOrderInput"></a>

```csharp
public string SortOrderInput { get; }
```

- *Type:* string

---

##### `StartIndexInput`<sup>Optional</sup> <a name="StartIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.startIndexInput"></a>

```csharp
public double StartIndexInput { get; }
```

- *Type:* double

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `OauthClientCertificateCount`<sup>Required</sup> <a name="OauthClientCertificateCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.oauthClientCertificateCount"></a>

```csharp
public double OauthClientCertificateCount { get; }
```

- *Type:* double

---

##### `OauthClientCertificateFilter`<sup>Required</sup> <a name="OauthClientCertificateFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.oauthClientCertificateFilter"></a>

```csharp
public string OauthClientCertificateFilter { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.sortBy"></a>

```csharp
public string SortBy { get; }
```

- *Type:* string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.sortOrder"></a>

```csharp
public string SortOrder { get; }
```

- *Type:* string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.startIndex"></a>

```csharp
public double StartIndex { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsOauthClientCertificatesConfig <a name="DataOciIdentityDomainsOauthClientCertificatesConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauthClientCertificatesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IdcsEndpoint,
    string Authorization = null,
    string CompartmentId = null,
    string Id = null,
    double OauthClientCertificateCount = null,
    string OauthClientCertificateFilter = null,
    string ResourceTypeSchemaVersion = null,
    string SortBy = null,
    string SortOrder = null,
    double StartIndex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#idcs_endpoint DataOciIdentityDomainsOauthClientCertificates#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#authorization DataOciIdentityDomainsOauthClientCertificates#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#compartment_id DataOciIdentityDomainsOauthClientCertificates#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#id DataOciIdentityDomainsOauthClientCertificates#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.oauthClientCertificateCount">OauthClientCertificateCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#oauth_client_certificate_count DataOciIdentityDomainsOauthClientCertificates#oauth_client_certificate_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.oauthClientCertificateFilter">OauthClientCertificateFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#oauth_client_certificate_filter DataOciIdentityDomainsOauthClientCertificates#oauth_client_certificate_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#resource_type_schema_version DataOciIdentityDomainsOauthClientCertificates#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.sortBy">SortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#sort_by DataOciIdentityDomainsOauthClientCertificates#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.sortOrder">SortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#sort_order DataOciIdentityDomainsOauthClientCertificates#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.startIndex">StartIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#start_index DataOciIdentityDomainsOauthClientCertificates#start_index}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#idcs_endpoint DataOciIdentityDomainsOauthClientCertificates#idcs_endpoint}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#authorization DataOciIdentityDomainsOauthClientCertificates#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#compartment_id DataOciIdentityDomainsOauthClientCertificates#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#id DataOciIdentityDomainsOauthClientCertificates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OauthClientCertificateCount`<sup>Optional</sup> <a name="OauthClientCertificateCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.oauthClientCertificateCount"></a>

```csharp
public double OauthClientCertificateCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#oauth_client_certificate_count DataOciIdentityDomainsOauthClientCertificates#oauth_client_certificate_count}.

---

##### `OauthClientCertificateFilter`<sup>Optional</sup> <a name="OauthClientCertificateFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.oauthClientCertificateFilter"></a>

```csharp
public string OauthClientCertificateFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#oauth_client_certificate_filter DataOciIdentityDomainsOauthClientCertificates#oauth_client_certificate_filter}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#resource_type_schema_version DataOciIdentityDomainsOauthClientCertificates#resource_type_schema_version}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.sortBy"></a>

```csharp
public string SortBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#sort_by DataOciIdentityDomainsOauthClientCertificates#sort_by}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.sortOrder"></a>

```csharp
public string SortOrder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#sort_order DataOciIdentityDomainsOauthClientCertificates#sort_order}.

---

##### `StartIndex`<sup>Optional</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.startIndex"></a>

```csharp
public double StartIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#start_index DataOciIdentityDomainsOauthClientCertificates#start_index}.

---

### DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificates <a name="DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificates" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificates"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificates.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificates {

};
```


### DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedBy <a name="DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedBy {

};
```


### DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedBy <a name="DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedBy {

};
```


### DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMeta <a name="DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMeta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMeta {

};
```


### DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTags <a name="DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList <a name="DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.get"></a>

```csharp
private DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedBy">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedBy">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedBy</a>

---


### DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList <a name="DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.get"></a>

```csharp
private DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedBy">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedBy">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList <a name="DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.get"></a>

```csharp
private DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList <a name="DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.get"></a>

```csharp
private DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference <a name="DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMeta">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMeta InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMeta">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMeta</a>

---


### DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference <a name="DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.certEndDate">CertEndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.certificateAlias">CertificateAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.certStartDate">CertStartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.domainOcid">DomainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.keyStoreId">KeyStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.keyStoreName">KeyStoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.keyStorePassword">KeyStorePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.map">Map</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.sha1Thumbprint">Sha1Thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.sha256Thumbprint">Sha256Thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.x509Base64Certificate">X509Base64Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificates">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `CertEndDate`<sup>Required</sup> <a name="CertEndDate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.certEndDate"></a>

```csharp
public string CertEndDate { get; }
```

- *Type:* string

---

##### `CertificateAlias`<sup>Required</sup> <a name="CertificateAlias" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.certificateAlias"></a>

```csharp
public string CertificateAlias { get; }
```

- *Type:* string

---

##### `CertStartDate`<sup>Required</sup> <a name="CertStartDate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.certStartDate"></a>

```csharp
public string CertStartDate { get; }
```

- *Type:* string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.compartmentOcid"></a>

```csharp
public string CompartmentOcid { get; }
```

- *Type:* string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.deleteInProgress"></a>

```csharp
public IResolvable DeleteInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.domainOcid"></a>

```csharp
public string DomainOcid { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.idcsCreatedBy"></a>

```csharp
public DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList IdcsCreatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList</a>

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.idcsLastModifiedBy"></a>

```csharp
public DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList IdcsLastModifiedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.idcsLastUpgradedInRelease"></a>

```csharp
public string IdcsLastUpgradedInRelease { get; }
```

- *Type:* string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.idcsPreventedOperations"></a>

```csharp
public string[] IdcsPreventedOperations { get; }
```

- *Type:* string[]

---

##### `KeyStoreId`<sup>Required</sup> <a name="KeyStoreId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.keyStoreId"></a>

```csharp
public string KeyStoreId { get; }
```

- *Type:* string

---

##### `KeyStoreName`<sup>Required</sup> <a name="KeyStoreName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.keyStoreName"></a>

```csharp
public string KeyStoreName { get; }
```

- *Type:* string

---

##### `KeyStorePassword`<sup>Required</sup> <a name="KeyStorePassword" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.keyStorePassword"></a>

```csharp
public string KeyStorePassword { get; }
```

- *Type:* string

---

##### `Map`<sup>Required</sup> <a name="Map" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.map"></a>

```csharp
public string Map { get; }
```

- *Type:* string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.meta"></a>

```csharp
public DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList Meta { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList</a>

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `Sha1Thumbprint`<sup>Required</sup> <a name="Sha1Thumbprint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.sha1Thumbprint"></a>

```csharp
public string Sha1Thumbprint { get; }
```

- *Type:* string

---

##### `Sha256Thumbprint`<sup>Required</sup> <a name="Sha256Thumbprint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.sha256Thumbprint"></a>

```csharp
public string Sha256Thumbprint { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.tags"></a>

```csharp
public DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.tenancyOcid"></a>

```csharp
public string TenancyOcid { get; }
```

- *Type:* string

---

##### `X509Base64Certificate`<sup>Required</sup> <a name="X509Base64Certificate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.x509Base64Certificate"></a>

```csharp
public string X509Base64Certificate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificates InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificates">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificates</a>

---


### DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList <a name="DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.get"></a>

```csharp
private DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference <a name="DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTags">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTags InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTags">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTags</a>

---



