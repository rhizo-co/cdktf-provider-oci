# `dataOciIdentityDomainsMyCustomerSecretKeys` Submodule <a name="`dataOciIdentityDomainsMyCustomerSecretKeys` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsMyCustomerSecretKeys <a name="DataOciIdentityDomainsMyCustomerSecretKeys" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys oci_identity_domains_my_customer_secret_keys}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCustomerSecretKeys(Construct Scope, string Id, DataOciIdentityDomainsMyCustomerSecretKeysConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig">DataOciIdentityDomainsMyCustomerSecretKeysConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig">DataOciIdentityDomainsMyCustomerSecretKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetMyCustomerSecretKeyCount">ResetMyCustomerSecretKeyCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetMyCustomerSecretKeyFilter">ResetMyCustomerSecretKeyFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetSortOrder">ResetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetStartIndex">ResetStartIndex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMyCustomerSecretKeyCount` <a name="ResetMyCustomerSecretKeyCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetMyCustomerSecretKeyCount"></a>

```csharp
private void ResetMyCustomerSecretKeyCount()
```

##### `ResetMyCustomerSecretKeyFilter` <a name="ResetMyCustomerSecretKeyFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetMyCustomerSecretKeyFilter"></a>

```csharp
private void ResetMyCustomerSecretKeyFilter()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetResourceTypeSchemaVersion"></a>

```csharp
private void ResetResourceTypeSchemaVersion()
```

##### `ResetSortBy` <a name="ResetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetSortBy"></a>

```csharp
private void ResetSortBy()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetSortOrder"></a>

```csharp
private void ResetSortOrder()
```

##### `ResetStartIndex` <a name="ResetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetStartIndex"></a>

```csharp
private void ResetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsMyCustomerSecretKeys resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsMyCustomerSecretKeys.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsMyCustomerSecretKeys.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsMyCustomerSecretKeys.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsMyCustomerSecretKeys.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciIdentityDomainsMyCustomerSecretKeys resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsMyCustomerSecretKeys to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsMyCustomerSecretKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsMyCustomerSecretKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.itemsPerPage">ItemsPerPage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.myCustomerSecretKeys">MyCustomerSecretKeys</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.totalResults">TotalResults</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.myCustomerSecretKeyCountInput">MyCustomerSecretKeyCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.myCustomerSecretKeyFilterInput">MyCustomerSecretKeyFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.sortByInput">SortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.sortOrderInput">SortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.startIndexInput">StartIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.myCustomerSecretKeyCount">MyCustomerSecretKeyCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.myCustomerSecretKeyFilter">MyCustomerSecretKeyFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.sortBy">SortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.sortOrder">SortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.startIndex">StartIndex</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.itemsPerPage"></a>

```csharp
public double ItemsPerPage { get; }
```

- *Type:* double

---

##### `MyCustomerSecretKeys`<sup>Required</sup> <a name="MyCustomerSecretKeys" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.myCustomerSecretKeys"></a>

```csharp
public DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList MyCustomerSecretKeys { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList</a>

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.totalResults"></a>

```csharp
public double TotalResults { get; }
```

- *Type:* double

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.idcsEndpointInput"></a>

```csharp
public string IdcsEndpointInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MyCustomerSecretKeyCountInput`<sup>Optional</sup> <a name="MyCustomerSecretKeyCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.myCustomerSecretKeyCountInput"></a>

```csharp
public double MyCustomerSecretKeyCountInput { get; }
```

- *Type:* double

---

##### `MyCustomerSecretKeyFilterInput`<sup>Optional</sup> <a name="MyCustomerSecretKeyFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.myCustomerSecretKeyFilterInput"></a>

```csharp
public string MyCustomerSecretKeyFilterInput { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.resourceTypeSchemaVersionInput"></a>

```csharp
public string ResourceTypeSchemaVersionInput { get; }
```

- *Type:* string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.sortByInput"></a>

```csharp
public string SortByInput { get; }
```

- *Type:* string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.sortOrderInput"></a>

```csharp
public string SortOrderInput { get; }
```

- *Type:* string

---

##### `StartIndexInput`<sup>Optional</sup> <a name="StartIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.startIndexInput"></a>

```csharp
public double StartIndexInput { get; }
```

- *Type:* double

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `MyCustomerSecretKeyCount`<sup>Required</sup> <a name="MyCustomerSecretKeyCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.myCustomerSecretKeyCount"></a>

```csharp
public double MyCustomerSecretKeyCount { get; }
```

- *Type:* double

---

##### `MyCustomerSecretKeyFilter`<sup>Required</sup> <a name="MyCustomerSecretKeyFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.myCustomerSecretKeyFilter"></a>

```csharp
public string MyCustomerSecretKeyFilter { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.sortBy"></a>

```csharp
public string SortBy { get; }
```

- *Type:* string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.sortOrder"></a>

```csharp
public string SortOrder { get; }
```

- *Type:* string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.startIndex"></a>

```csharp
public double StartIndex { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsMyCustomerSecretKeysConfig <a name="DataOciIdentityDomainsMyCustomerSecretKeysConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCustomerSecretKeysConfig {
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
    double MyCustomerSecretKeyCount = null,
    string MyCustomerSecretKeyFilter = null,
    string ResourceTypeSchemaVersion = null,
    string SortBy = null,
    string SortOrder = null,
    double StartIndex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#idcs_endpoint DataOciIdentityDomainsMyCustomerSecretKeys#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#authorization DataOciIdentityDomainsMyCustomerSecretKeys#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#compartment_id DataOciIdentityDomainsMyCustomerSecretKeys#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#id DataOciIdentityDomainsMyCustomerSecretKeys#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.myCustomerSecretKeyCount">MyCustomerSecretKeyCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#my_customer_secret_key_count DataOciIdentityDomainsMyCustomerSecretKeys#my_customer_secret_key_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.myCustomerSecretKeyFilter">MyCustomerSecretKeyFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#my_customer_secret_key_filter DataOciIdentityDomainsMyCustomerSecretKeys#my_customer_secret_key_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#resource_type_schema_version DataOciIdentityDomainsMyCustomerSecretKeys#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.sortBy">SortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#sort_by DataOciIdentityDomainsMyCustomerSecretKeys#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.sortOrder">SortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#sort_order DataOciIdentityDomainsMyCustomerSecretKeys#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.startIndex">StartIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#start_index DataOciIdentityDomainsMyCustomerSecretKeys#start_index}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#idcs_endpoint DataOciIdentityDomainsMyCustomerSecretKeys#idcs_endpoint}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#authorization DataOciIdentityDomainsMyCustomerSecretKeys#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#compartment_id DataOciIdentityDomainsMyCustomerSecretKeys#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#id DataOciIdentityDomainsMyCustomerSecretKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MyCustomerSecretKeyCount`<sup>Optional</sup> <a name="MyCustomerSecretKeyCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.myCustomerSecretKeyCount"></a>

```csharp
public double MyCustomerSecretKeyCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#my_customer_secret_key_count DataOciIdentityDomainsMyCustomerSecretKeys#my_customer_secret_key_count}.

---

##### `MyCustomerSecretKeyFilter`<sup>Optional</sup> <a name="MyCustomerSecretKeyFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.myCustomerSecretKeyFilter"></a>

```csharp
public string MyCustomerSecretKeyFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#my_customer_secret_key_filter DataOciIdentityDomainsMyCustomerSecretKeys#my_customer_secret_key_filter}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#resource_type_schema_version DataOciIdentityDomainsMyCustomerSecretKeys#resource_type_schema_version}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.sortBy"></a>

```csharp
public string SortBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#sort_by DataOciIdentityDomainsMyCustomerSecretKeys#sort_by}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.sortOrder"></a>

```csharp
public string SortOrder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#sort_order DataOciIdentityDomainsMyCustomerSecretKeys#sort_order}.

---

##### `StartIndex`<sup>Optional</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.startIndex"></a>

```csharp
public double StartIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#start_index DataOciIdentityDomainsMyCustomerSecretKeys#start_index}.

---

### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys {

};
```


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy {

};
```


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy {

};
```


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta {

};
```


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags {

};
```


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.get"></a>

```csharp
private DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy</a>

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.get"></a>

```csharp
private DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.get"></a>

```csharp
private DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.get"></a>

```csharp
private DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta</a>

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.accessKey">AccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.domainOcid">DomainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.expiresOn">ExpiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.user">User</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessKey`<sup>Required</sup> <a name="AccessKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.accessKey"></a>

```csharp
public string AccessKey { get; }
```

- *Type:* string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.compartmentOcid"></a>

```csharp
public string CompartmentOcid { get; }
```

- *Type:* string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.deleteInProgress"></a>

```csharp
public IResolvable DeleteInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.domainOcid"></a>

```csharp
public string DomainOcid { get; }
```

- *Type:* string

---

##### `ExpiresOn`<sup>Required</sup> <a name="ExpiresOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.expiresOn"></a>

```csharp
public string ExpiresOn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.idcsCreatedBy"></a>

```csharp
public DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList IdcsCreatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList</a>

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.idcsLastModifiedBy"></a>

```csharp
public DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList IdcsLastModifiedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.idcsLastUpgradedInRelease"></a>

```csharp
public string IdcsLastUpgradedInRelease { get; }
```

- *Type:* string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.idcsPreventedOperations"></a>

```csharp
public string[] IdcsPreventedOperations { get; }
```

- *Type:* string[]

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.meta"></a>

```csharp
public DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList Meta { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList</a>

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.tags"></a>

```csharp
public DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.tenancyOcid"></a>

```csharp
public string TenancyOcid { get; }
```

- *Type:* string

---

##### `User`<sup>Required</sup> <a name="User" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.user"></a>

```csharp
public DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList User { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys</a>

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.get"></a>

```csharp
private DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags</a>

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.get"></a>

```csharp
private DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser</a>

---



