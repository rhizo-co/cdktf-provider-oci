# `dataOciIdentityDomainsPasswordPolicies` Submodule <a name="`dataOciIdentityDomainsPasswordPolicies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsPasswordPolicies <a name="DataOciIdentityDomainsPasswordPolicies" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies oci_identity_domains_password_policies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsPasswordPolicies(Construct Scope, string Id, DataOciIdentityDomainsPasswordPoliciesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig">DataOciIdentityDomainsPasswordPoliciesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig">DataOciIdentityDomainsPasswordPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetPasswordPolicyCount">ResetPasswordPolicyCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetPasswordPolicyFilter">ResetPasswordPolicyFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetSortOrder">ResetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetStartIndex">ResetStartIndex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetAttributeSets"></a>

```csharp
private void ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPasswordPolicyCount` <a name="ResetPasswordPolicyCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetPasswordPolicyCount"></a>

```csharp
private void ResetPasswordPolicyCount()
```

##### `ResetPasswordPolicyFilter` <a name="ResetPasswordPolicyFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetPasswordPolicyFilter"></a>

```csharp
private void ResetPasswordPolicyFilter()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetResourceTypeSchemaVersion"></a>

```csharp
private void ResetResourceTypeSchemaVersion()
```

##### `ResetSortBy` <a name="ResetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetSortBy"></a>

```csharp
private void ResetSortBy()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetSortOrder"></a>

```csharp
private void ResetSortOrder()
```

##### `ResetStartIndex` <a name="ResetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetStartIndex"></a>

```csharp
private void ResetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsPasswordPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsPasswordPolicies.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsPasswordPolicies.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsPasswordPolicies.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsPasswordPolicies.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciIdentityDomainsPasswordPolicies resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsPasswordPolicies to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsPasswordPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsPasswordPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.itemsPerPage">ItemsPerPage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicies">PasswordPolicies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.totalResults">TotalResults</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributesInput">AttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyCountInput">PasswordPolicyCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyFilterInput">PasswordPolicyFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortByInput">SortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortOrderInput">SortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.startIndexInput">StartIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributes">Attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyCount">PasswordPolicyCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyFilter">PasswordPolicyFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortBy">SortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortOrder">SortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.startIndex">StartIndex</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.itemsPerPage"></a>

```csharp
public double ItemsPerPage { get; }
```

- *Type:* double

---

##### `PasswordPolicies`<sup>Required</sup> <a name="PasswordPolicies" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicies"></a>

```csharp
public DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList PasswordPolicies { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList</a>

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.totalResults"></a>

```csharp
public double TotalResults { get; }
```

- *Type:* double

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributeSetsInput"></a>

```csharp
public string[] AttributeSetsInput { get; }
```

- *Type:* string[]

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributesInput"></a>

```csharp
public string AttributesInput { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.idcsEndpointInput"></a>

```csharp
public string IdcsEndpointInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PasswordPolicyCountInput`<sup>Optional</sup> <a name="PasswordPolicyCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyCountInput"></a>

```csharp
public double PasswordPolicyCountInput { get; }
```

- *Type:* double

---

##### `PasswordPolicyFilterInput`<sup>Optional</sup> <a name="PasswordPolicyFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyFilterInput"></a>

```csharp
public string PasswordPolicyFilterInput { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.resourceTypeSchemaVersionInput"></a>

```csharp
public string ResourceTypeSchemaVersionInput { get; }
```

- *Type:* string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortByInput"></a>

```csharp
public string SortByInput { get; }
```

- *Type:* string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortOrderInput"></a>

```csharp
public string SortOrderInput { get; }
```

- *Type:* string

---

##### `StartIndexInput`<sup>Optional</sup> <a name="StartIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.startIndexInput"></a>

```csharp
public double StartIndexInput { get; }
```

- *Type:* double

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributes"></a>

```csharp
public string Attributes { get; }
```

- *Type:* string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; }
```

- *Type:* string[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `PasswordPolicyCount`<sup>Required</sup> <a name="PasswordPolicyCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyCount"></a>

```csharp
public double PasswordPolicyCount { get; }
```

- *Type:* double

---

##### `PasswordPolicyFilter`<sup>Required</sup> <a name="PasswordPolicyFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyFilter"></a>

```csharp
public string PasswordPolicyFilter { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortBy"></a>

```csharp
public string SortBy { get; }
```

- *Type:* string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortOrder"></a>

```csharp
public string SortOrder { get; }
```

- *Type:* string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.startIndex"></a>

```csharp
public double StartIndex { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsPasswordPoliciesConfig <a name="DataOciIdentityDomainsPasswordPoliciesConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsPasswordPoliciesConfig {
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
    double PasswordPolicyCount = null,
    string PasswordPolicyFilter = null,
    string ResourceTypeSchemaVersion = null,
    string SortBy = null,
    string SortOrder = null,
    double StartIndex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#idcs_endpoint DataOciIdentityDomainsPasswordPolicies#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.attributes">Attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#attributes DataOciIdentityDomainsPasswordPolicies#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#attribute_sets DataOciIdentityDomainsPasswordPolicies#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#authorization DataOciIdentityDomainsPasswordPolicies#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#compartment_id DataOciIdentityDomainsPasswordPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#id DataOciIdentityDomainsPasswordPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.passwordPolicyCount">PasswordPolicyCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#password_policy_count DataOciIdentityDomainsPasswordPolicies#password_policy_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.passwordPolicyFilter">PasswordPolicyFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#password_policy_filter DataOciIdentityDomainsPasswordPolicies#password_policy_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#resource_type_schema_version DataOciIdentityDomainsPasswordPolicies#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.sortBy">SortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#sort_by DataOciIdentityDomainsPasswordPolicies#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.sortOrder">SortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#sort_order DataOciIdentityDomainsPasswordPolicies#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.startIndex">StartIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#start_index DataOciIdentityDomainsPasswordPolicies#start_index}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#idcs_endpoint DataOciIdentityDomainsPasswordPolicies#idcs_endpoint}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.attributes"></a>

```csharp
public string Attributes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#attributes DataOciIdentityDomainsPasswordPolicies#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#attribute_sets DataOciIdentityDomainsPasswordPolicies#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#authorization DataOciIdentityDomainsPasswordPolicies#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#compartment_id DataOciIdentityDomainsPasswordPolicies#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#id DataOciIdentityDomainsPasswordPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PasswordPolicyCount`<sup>Optional</sup> <a name="PasswordPolicyCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.passwordPolicyCount"></a>

```csharp
public double PasswordPolicyCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#password_policy_count DataOciIdentityDomainsPasswordPolicies#password_policy_count}.

---

##### `PasswordPolicyFilter`<sup>Optional</sup> <a name="PasswordPolicyFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.passwordPolicyFilter"></a>

```csharp
public string PasswordPolicyFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#password_policy_filter DataOciIdentityDomainsPasswordPolicies#password_policy_filter}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#resource_type_schema_version DataOciIdentityDomainsPasswordPolicies#resource_type_schema_version}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.sortBy"></a>

```csharp
public string SortBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#sort_by DataOciIdentityDomainsPasswordPolicies#sort_by}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.sortOrder"></a>

```csharp
public string SortOrder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#sort_order DataOciIdentityDomainsPasswordPolicies#sort_order}.

---

##### `StartIndex`<sup>Optional</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.startIndex"></a>

```csharp
public double StartIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#start_index DataOciIdentityDomainsPasswordPolicies#start_index}.

---

### DataOciIdentityDomainsPasswordPoliciesPasswordPolicies <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPolicies" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsPasswordPoliciesPasswordPolicies {

};
```


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules {

};
```


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups {

};
```


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy {

};
```


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy {

};
```


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta {

};
```


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.get"></a>

```csharp
private DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules</a>

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.get"></a>

```csharp
private DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups</a>

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.get"></a>

```csharp
private DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy</a>

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.get"></a>

```csharp
private DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.get"></a>

```csharp
private DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.get"></a>

```csharp
private DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta</a>

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.allowedChars">AllowedChars</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.attributes">Attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.configuredPasswordPolicyRules">ConfiguredPasswordPolicyRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.dictionaryDelimiter">DictionaryDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.dictionaryLocation">DictionaryLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.dictionaryWordDisallowed">DictionaryWordDisallowed</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.disallowedChars">DisallowedChars</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.disallowedSubstrings">DisallowedSubstrings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.disallowedUserAttributeValues">DisallowedUserAttributeValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.distinctCharacters">DistinctCharacters</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.domainOcid">DomainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.firstNameDisallowed">FirstNameDisallowed</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.forcePasswordReset">ForcePasswordReset</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.groups">Groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.lastNameDisallowed">LastNameDisallowed</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.lockoutDuration">LockoutDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxIncorrectAttempts">MaxIncorrectAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxLength">MaxLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxRepeatedChars">MaxRepeatedChars</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxSpecialChars">MaxSpecialChars</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minAlphaNumerals">MinAlphaNumerals</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minAlphas">MinAlphas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minLength">MinLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minLowerCase">MinLowerCase</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minNumerals">MinNumerals</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minPasswordAge">MinPasswordAge</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minSpecialChars">MinSpecialChars</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minUniqueChars">MinUniqueChars</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minUpperCase">MinUpperCase</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.numPasswordsInHistory">NumPasswordsInHistory</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.passwordExpiresAfter">PasswordExpiresAfter</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.passwordExpireWarning">PasswordExpireWarning</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.passwordStrength">PasswordStrength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.requiredChars">RequiredChars</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.startsWithAlphabet">StartsWithAlphabet</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.userNameDisallowed">UserNameDisallowed</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPolicies">DataOciIdentityDomainsPasswordPoliciesPasswordPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedChars`<sup>Required</sup> <a name="AllowedChars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.allowedChars"></a>

```csharp
public string AllowedChars { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.attributes"></a>

```csharp
public string Attributes { get; }
```

- *Type:* string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; }
```

- *Type:* string[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.compartmentOcid"></a>

```csharp
public string CompartmentOcid { get; }
```

- *Type:* string

---

##### `ConfiguredPasswordPolicyRules`<sup>Required</sup> <a name="ConfiguredPasswordPolicyRules" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.configuredPasswordPolicyRules"></a>

```csharp
public DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList ConfiguredPasswordPolicyRules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList</a>

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.deleteInProgress"></a>

```csharp
public IResolvable DeleteInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DictionaryDelimiter`<sup>Required</sup> <a name="DictionaryDelimiter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.dictionaryDelimiter"></a>

```csharp
public string DictionaryDelimiter { get; }
```

- *Type:* string

---

##### `DictionaryLocation`<sup>Required</sup> <a name="DictionaryLocation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.dictionaryLocation"></a>

```csharp
public string DictionaryLocation { get; }
```

- *Type:* string

---

##### `DictionaryWordDisallowed`<sup>Required</sup> <a name="DictionaryWordDisallowed" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.dictionaryWordDisallowed"></a>

```csharp
public IResolvable DictionaryWordDisallowed { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DisallowedChars`<sup>Required</sup> <a name="DisallowedChars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.disallowedChars"></a>

```csharp
public string DisallowedChars { get; }
```

- *Type:* string

---

##### `DisallowedSubstrings`<sup>Required</sup> <a name="DisallowedSubstrings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.disallowedSubstrings"></a>

```csharp
public string[] DisallowedSubstrings { get; }
```

- *Type:* string[]

---

##### `DisallowedUserAttributeValues`<sup>Required</sup> <a name="DisallowedUserAttributeValues" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.disallowedUserAttributeValues"></a>

```csharp
public string[] DisallowedUserAttributeValues { get; }
```

- *Type:* string[]

---

##### `DistinctCharacters`<sup>Required</sup> <a name="DistinctCharacters" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.distinctCharacters"></a>

```csharp
public double DistinctCharacters { get; }
```

- *Type:* double

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.domainOcid"></a>

```csharp
public string DomainOcid { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `FirstNameDisallowed`<sup>Required</sup> <a name="FirstNameDisallowed" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.firstNameDisallowed"></a>

```csharp
public IResolvable FirstNameDisallowed { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ForcePasswordReset`<sup>Required</sup> <a name="ForcePasswordReset" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.forcePasswordReset"></a>

```csharp
public IResolvable ForcePasswordReset { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.groups"></a>

```csharp
public DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList Groups { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsCreatedBy"></a>

```csharp
public DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList IdcsCreatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList</a>

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsLastModifiedBy"></a>

```csharp
public DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList IdcsLastModifiedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsLastUpgradedInRelease"></a>

```csharp
public string IdcsLastUpgradedInRelease { get; }
```

- *Type:* string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsPreventedOperations"></a>

```csharp
public string[] IdcsPreventedOperations { get; }
```

- *Type:* string[]

---

##### `LastNameDisallowed`<sup>Required</sup> <a name="LastNameDisallowed" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.lastNameDisallowed"></a>

```csharp
public IResolvable LastNameDisallowed { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LockoutDuration`<sup>Required</sup> <a name="LockoutDuration" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.lockoutDuration"></a>

```csharp
public double LockoutDuration { get; }
```

- *Type:* double

---

##### `MaxIncorrectAttempts`<sup>Required</sup> <a name="MaxIncorrectAttempts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxIncorrectAttempts"></a>

```csharp
public double MaxIncorrectAttempts { get; }
```

- *Type:* double

---

##### `MaxLength`<sup>Required</sup> <a name="MaxLength" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxLength"></a>

```csharp
public double MaxLength { get; }
```

- *Type:* double

---

##### `MaxRepeatedChars`<sup>Required</sup> <a name="MaxRepeatedChars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxRepeatedChars"></a>

```csharp
public double MaxRepeatedChars { get; }
```

- *Type:* double

---

##### `MaxSpecialChars`<sup>Required</sup> <a name="MaxSpecialChars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxSpecialChars"></a>

```csharp
public double MaxSpecialChars { get; }
```

- *Type:* double

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.meta"></a>

```csharp
public DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList Meta { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList</a>

---

##### `MinAlphaNumerals`<sup>Required</sup> <a name="MinAlphaNumerals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minAlphaNumerals"></a>

```csharp
public double MinAlphaNumerals { get; }
```

- *Type:* double

---

##### `MinAlphas`<sup>Required</sup> <a name="MinAlphas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minAlphas"></a>

```csharp
public double MinAlphas { get; }
```

- *Type:* double

---

##### `MinLength`<sup>Required</sup> <a name="MinLength" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minLength"></a>

```csharp
public double MinLength { get; }
```

- *Type:* double

---

##### `MinLowerCase`<sup>Required</sup> <a name="MinLowerCase" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minLowerCase"></a>

```csharp
public double MinLowerCase { get; }
```

- *Type:* double

---

##### `MinNumerals`<sup>Required</sup> <a name="MinNumerals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minNumerals"></a>

```csharp
public double MinNumerals { get; }
```

- *Type:* double

---

##### `MinPasswordAge`<sup>Required</sup> <a name="MinPasswordAge" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minPasswordAge"></a>

```csharp
public double MinPasswordAge { get; }
```

- *Type:* double

---

##### `MinSpecialChars`<sup>Required</sup> <a name="MinSpecialChars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minSpecialChars"></a>

```csharp
public double MinSpecialChars { get; }
```

- *Type:* double

---

##### `MinUniqueChars`<sup>Required</sup> <a name="MinUniqueChars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minUniqueChars"></a>

```csharp
public double MinUniqueChars { get; }
```

- *Type:* double

---

##### `MinUpperCase`<sup>Required</sup> <a name="MinUpperCase" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minUpperCase"></a>

```csharp
public double MinUpperCase { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NumPasswordsInHistory`<sup>Required</sup> <a name="NumPasswordsInHistory" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.numPasswordsInHistory"></a>

```csharp
public double NumPasswordsInHistory { get; }
```

- *Type:* double

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `PasswordExpiresAfter`<sup>Required</sup> <a name="PasswordExpiresAfter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.passwordExpiresAfter"></a>

```csharp
public double PasswordExpiresAfter { get; }
```

- *Type:* double

---

##### `PasswordExpireWarning`<sup>Required</sup> <a name="PasswordExpireWarning" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.passwordExpireWarning"></a>

```csharp
public double PasswordExpireWarning { get; }
```

- *Type:* double

---

##### `PasswordStrength`<sup>Required</sup> <a name="PasswordStrength" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.passwordStrength"></a>

```csharp
public string PasswordStrength { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `RequiredChars`<sup>Required</sup> <a name="RequiredChars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.requiredChars"></a>

```csharp
public string RequiredChars { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `StartsWithAlphabet`<sup>Required</sup> <a name="StartsWithAlphabet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.startsWithAlphabet"></a>

```csharp
public IResolvable StartsWithAlphabet { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.tags"></a>

```csharp
public DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.tenancyOcid"></a>

```csharp
public string TenancyOcid { get; }
```

- *Type:* string

---

##### `UserNameDisallowed`<sup>Required</sup> <a name="UserNameDisallowed" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.userNameDisallowed"></a>

```csharp
public IResolvable UserNameDisallowed { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsPasswordPoliciesPasswordPolicies InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPolicies">DataOciIdentityDomainsPasswordPoliciesPasswordPolicies</a>

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.get"></a>

```csharp
private DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags</a>

---



