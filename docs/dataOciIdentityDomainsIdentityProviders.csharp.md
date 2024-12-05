# `dataOciIdentityDomainsIdentityProviders` Submodule <a name="`dataOciIdentityDomainsIdentityProviders` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsIdentityProviders <a name="DataOciIdentityDomainsIdentityProviders" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers oci_identity_domains_identity_providers}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProviders(Construct Scope, string Id, DataOciIdentityDomainsIdentityProvidersConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig">DataOciIdentityDomainsIdentityProvidersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig">DataOciIdentityDomainsIdentityProvidersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetIdentityProviderCount">ResetIdentityProviderCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetIdentityProviderFilter">ResetIdentityProviderFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetSortOrder">ResetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetStartIndex">ResetStartIndex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetAttributeSets"></a>

```csharp
private void ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityProviderCount` <a name="ResetIdentityProviderCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetIdentityProviderCount"></a>

```csharp
private void ResetIdentityProviderCount()
```

##### `ResetIdentityProviderFilter` <a name="ResetIdentityProviderFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetIdentityProviderFilter"></a>

```csharp
private void ResetIdentityProviderFilter()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetResourceTypeSchemaVersion"></a>

```csharp
private void ResetResourceTypeSchemaVersion()
```

##### `ResetSortBy` <a name="ResetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetSortBy"></a>

```csharp
private void ResetSortBy()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetSortOrder"></a>

```csharp
private void ResetSortOrder()
```

##### `ResetStartIndex` <a name="ResetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetStartIndex"></a>

```csharp
private void ResetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsIdentityProviders resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsIdentityProviders.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsIdentityProviders.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsIdentityProviders.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsIdentityProviders.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciIdentityDomainsIdentityProviders resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsIdentityProviders to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsIdentityProviders that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsIdentityProviders to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.identityProviders">IdentityProviders</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.itemsPerPage">ItemsPerPage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.totalResults">TotalResults</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.attributesInput">AttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.identityProviderCountInput">IdentityProviderCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.identityProviderFilterInput">IdentityProviderFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.sortByInput">SortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.sortOrderInput">SortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.startIndexInput">StartIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.attributes">Attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.identityProviderCount">IdentityProviderCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.identityProviderFilter">IdentityProviderFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.sortBy">SortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.sortOrder">SortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.startIndex">StartIndex</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `IdentityProviders`<sup>Required</sup> <a name="IdentityProviders" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.identityProviders"></a>

```csharp
public DataOciIdentityDomainsIdentityProvidersIdentityProvidersList IdentityProviders { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersList</a>

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.itemsPerPage"></a>

```csharp
public double ItemsPerPage { get; }
```

- *Type:* double

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.totalResults"></a>

```csharp
public double TotalResults { get; }
```

- *Type:* double

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.attributeSetsInput"></a>

```csharp
public string[] AttributeSetsInput { get; }
```

- *Type:* string[]

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.attributesInput"></a>

```csharp
public string AttributesInput { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.idcsEndpointInput"></a>

```csharp
public string IdcsEndpointInput { get; }
```

- *Type:* string

---

##### `IdentityProviderCountInput`<sup>Optional</sup> <a name="IdentityProviderCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.identityProviderCountInput"></a>

```csharp
public double IdentityProviderCountInput { get; }
```

- *Type:* double

---

##### `IdentityProviderFilterInput`<sup>Optional</sup> <a name="IdentityProviderFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.identityProviderFilterInput"></a>

```csharp
public string IdentityProviderFilterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.resourceTypeSchemaVersionInput"></a>

```csharp
public string ResourceTypeSchemaVersionInput { get; }
```

- *Type:* string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.sortByInput"></a>

```csharp
public string SortByInput { get; }
```

- *Type:* string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.sortOrderInput"></a>

```csharp
public string SortOrderInput { get; }
```

- *Type:* string

---

##### `StartIndexInput`<sup>Optional</sup> <a name="StartIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.startIndexInput"></a>

```csharp
public double StartIndexInput { get; }
```

- *Type:* double

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.attributes"></a>

```csharp
public string Attributes { get; }
```

- *Type:* string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; }
```

- *Type:* string[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `IdentityProviderCount`<sup>Required</sup> <a name="IdentityProviderCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.identityProviderCount"></a>

```csharp
public double IdentityProviderCount { get; }
```

- *Type:* double

---

##### `IdentityProviderFilter`<sup>Required</sup> <a name="IdentityProviderFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.identityProviderFilter"></a>

```csharp
public string IdentityProviderFilter { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.sortBy"></a>

```csharp
public string SortBy { get; }
```

- *Type:* string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.sortOrder"></a>

```csharp
public string SortOrder { get; }
```

- *Type:* string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.startIndex"></a>

```csharp
public double StartIndex { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsIdentityProvidersConfig <a name="DataOciIdentityDomainsIdentityProvidersConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersConfig {
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
    double IdentityProviderCount = null,
    string IdentityProviderFilter = null,
    string ResourceTypeSchemaVersion = null,
    string SortBy = null,
    string SortOrder = null,
    double StartIndex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#idcs_endpoint DataOciIdentityDomainsIdentityProviders#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.attributes">Attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#attributes DataOciIdentityDomainsIdentityProviders#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#attribute_sets DataOciIdentityDomainsIdentityProviders#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#authorization DataOciIdentityDomainsIdentityProviders#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#compartment_id DataOciIdentityDomainsIdentityProviders#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#id DataOciIdentityDomainsIdentityProviders#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.identityProviderCount">IdentityProviderCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#identity_provider_count DataOciIdentityDomainsIdentityProviders#identity_provider_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.identityProviderFilter">IdentityProviderFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#identity_provider_filter DataOciIdentityDomainsIdentityProviders#identity_provider_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#resource_type_schema_version DataOciIdentityDomainsIdentityProviders#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.sortBy">SortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#sort_by DataOciIdentityDomainsIdentityProviders#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.sortOrder">SortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#sort_order DataOciIdentityDomainsIdentityProviders#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.startIndex">StartIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#start_index DataOciIdentityDomainsIdentityProviders#start_index}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#idcs_endpoint DataOciIdentityDomainsIdentityProviders#idcs_endpoint}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.attributes"></a>

```csharp
public string Attributes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#attributes DataOciIdentityDomainsIdentityProviders#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#attribute_sets DataOciIdentityDomainsIdentityProviders#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#authorization DataOciIdentityDomainsIdentityProviders#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#compartment_id DataOciIdentityDomainsIdentityProviders#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#id DataOciIdentityDomainsIdentityProviders#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProviderCount`<sup>Optional</sup> <a name="IdentityProviderCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.identityProviderCount"></a>

```csharp
public double IdentityProviderCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#identity_provider_count DataOciIdentityDomainsIdentityProviders#identity_provider_count}.

---

##### `IdentityProviderFilter`<sup>Optional</sup> <a name="IdentityProviderFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.identityProviderFilter"></a>

```csharp
public string IdentityProviderFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#identity_provider_filter DataOciIdentityDomainsIdentityProviders#identity_provider_filter}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#resource_type_schema_version DataOciIdentityDomainsIdentityProviders#resource_type_schema_version}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.sortBy"></a>

```csharp
public string SortBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#sort_by DataOciIdentityDomainsIdentityProviders#sort_by}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.sortOrder"></a>

```csharp
public string SortOrder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#sort_order DataOciIdentityDomainsIdentityProviders#sort_order}.

---

##### `StartIndex`<sup>Optional</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.startIndex"></a>

```csharp
public double StartIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#start_index DataOciIdentityDomainsIdentityProviders#start_index}.

---

### DataOciIdentityDomainsIdentityProvidersIdentityProviders <a name="DataOciIdentityDomainsIdentityProvidersIdentityProviders" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProviders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProviders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProviders {

};
```


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicy <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicy {

};
```


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedBy <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedBy {

};
```


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedBy <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedBy {

};
```


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroups <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroups {

};
```


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributes <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributes {

};
```


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappings <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappings {

};
```


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersMeta <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMeta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersMeta {

};
```


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersTags <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersTags {

};
```


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider {

};
```


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups {

};
```


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.get"></a>

```csharp
private DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicy">DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicy">DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicy</a>

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.get"></a>

```csharp
private DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedBy">DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedBy">DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedBy</a>

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.get"></a>

```csharp
private DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedBy">DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedBy">DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.get"></a>

```csharp
private DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroups">DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroups InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroups">DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroups</a>

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.get"></a>

```csharp
private DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributes">DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributes">DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributes</a>

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.get"></a>

```csharp
private DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.property.idpGroup">IdpGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappings">DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdpGroup`<sup>Required</sup> <a name="IdpGroup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.property.idpGroup"></a>

```csharp
public string IdpGroup { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappings">DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappings</a>

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersList <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.get"></a>

```csharp
private DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.get"></a>

```csharp
private DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMeta">DataOciIdentityDomainsIdentityProvidersIdentityProvidersMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsIdentityProvidersIdentityProvidersMeta InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMeta">DataOciIdentityDomainsIdentityProvidersIdentityProvidersMeta</a>

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.assertionAttribute">AssertionAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.attributes">Attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.authnRequestBinding">AuthnRequestBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.correlationPolicy">CorrelationPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.domainOcid">DomainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.encryptionCertificate">EncryptionCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.iconUrl">IconUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.idpSsoUrl">IdpSsoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.includeSigningCertInSignature">IncludeSigningCertInSignature</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvAssignedGroups">JitUserProvAssignedGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvAttributes">JitUserProvAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvAttributeUpdateEnabled">JitUserProvAttributeUpdateEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvCreateUserEnabled">JitUserProvCreateUserEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvEnabled">JitUserProvEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvGroupAssertionAttributeEnabled">JitUserProvGroupAssertionAttributeEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvGroupAssignmentMethod">JitUserProvGroupAssignmentMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvGroupMappingMode">JitUserProvGroupMappingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvGroupMappings">JitUserProvGroupMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvGroupSamlAttributeName">JitUserProvGroupSamlAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvGroupStaticListEnabled">JitUserProvGroupStaticListEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvIgnoreErrorOnAbsentGroups">JitUserProvIgnoreErrorOnAbsentGroups</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.lastNotificationSentTime">LastNotificationSentTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.logoutBinding">LogoutBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.logoutEnabled">LogoutEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.logoutRequestUrl">LogoutRequestUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.logoutResponseUrl">LogoutResponseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.nameIdFormat">NameIdFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.partnerName">PartnerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.partnerProviderId">PartnerProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.requestedAuthenticationContext">RequestedAuthenticationContext</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.requireForceAuthn">RequireForceAuthn</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.requiresEncryptedAssertion">RequiresEncryptedAssertion</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.samlHoKrequired">SamlHoKrequired</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.serviceInstanceIdentifier">ServiceInstanceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.shownOnLoginPage">ShownOnLoginPage</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.signatureHashAlgorithm">SignatureHashAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.signingCertificate">SigningCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.succinctId">SuccinctId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.tenantProviderId">TenantProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">UrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">Urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.userMappingMethod">UserMappingMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.userMappingStoreAttribute">UserMappingStoreAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProviders">DataOciIdentityDomainsIdentityProvidersIdentityProviders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssertionAttribute`<sup>Required</sup> <a name="AssertionAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.assertionAttribute"></a>

```csharp
public string AssertionAttribute { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.attributes"></a>

```csharp
public string Attributes { get; }
```

- *Type:* string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; }
```

- *Type:* string[]

---

##### `AuthnRequestBinding`<sup>Required</sup> <a name="AuthnRequestBinding" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.authnRequestBinding"></a>

```csharp
public string AuthnRequestBinding { get; }
```

- *Type:* string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.compartmentOcid"></a>

```csharp
public string CompartmentOcid { get; }
```

- *Type:* string

---

##### `CorrelationPolicy`<sup>Required</sup> <a name="CorrelationPolicy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.correlationPolicy"></a>

```csharp
public DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList CorrelationPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList</a>

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.deleteInProgress"></a>

```csharp
public IResolvable DeleteInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.domainOcid"></a>

```csharp
public string DomainOcid { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EncryptionCertificate`<sup>Required</sup> <a name="EncryptionCertificate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.encryptionCertificate"></a>

```csharp
public string EncryptionCertificate { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `IconUrl`<sup>Required</sup> <a name="IconUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.iconUrl"></a>

```csharp
public string IconUrl { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.idcsCreatedBy"></a>

```csharp
public DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList IdcsCreatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList</a>

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.idcsLastModifiedBy"></a>

```csharp
public DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList IdcsLastModifiedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.idcsLastUpgradedInRelease"></a>

```csharp
public string IdcsLastUpgradedInRelease { get; }
```

- *Type:* string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.idcsPreventedOperations"></a>

```csharp
public string[] IdcsPreventedOperations { get; }
```

- *Type:* string[]

---

##### `IdpSsoUrl`<sup>Required</sup> <a name="IdpSsoUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.idpSsoUrl"></a>

```csharp
public string IdpSsoUrl { get; }
```

- *Type:* string

---

##### `IncludeSigningCertInSignature`<sup>Required</sup> <a name="IncludeSigningCertInSignature" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.includeSigningCertInSignature"></a>

```csharp
public IResolvable IncludeSigningCertInSignature { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `JitUserProvAssignedGroups`<sup>Required</sup> <a name="JitUserProvAssignedGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvAssignedGroups"></a>

```csharp
public DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList JitUserProvAssignedGroups { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList</a>

---

##### `JitUserProvAttributes`<sup>Required</sup> <a name="JitUserProvAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvAttributes"></a>

```csharp
public DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList JitUserProvAttributes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList</a>

---

##### `JitUserProvAttributeUpdateEnabled`<sup>Required</sup> <a name="JitUserProvAttributeUpdateEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvAttributeUpdateEnabled"></a>

```csharp
public IResolvable JitUserProvAttributeUpdateEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `JitUserProvCreateUserEnabled`<sup>Required</sup> <a name="JitUserProvCreateUserEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvCreateUserEnabled"></a>

```csharp
public IResolvable JitUserProvCreateUserEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `JitUserProvEnabled`<sup>Required</sup> <a name="JitUserProvEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvEnabled"></a>

```csharp
public IResolvable JitUserProvEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `JitUserProvGroupAssertionAttributeEnabled`<sup>Required</sup> <a name="JitUserProvGroupAssertionAttributeEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvGroupAssertionAttributeEnabled"></a>

```csharp
public IResolvable JitUserProvGroupAssertionAttributeEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `JitUserProvGroupAssignmentMethod`<sup>Required</sup> <a name="JitUserProvGroupAssignmentMethod" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvGroupAssignmentMethod"></a>

```csharp
public string JitUserProvGroupAssignmentMethod { get; }
```

- *Type:* string

---

##### `JitUserProvGroupMappingMode`<sup>Required</sup> <a name="JitUserProvGroupMappingMode" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvGroupMappingMode"></a>

```csharp
public string JitUserProvGroupMappingMode { get; }
```

- *Type:* string

---

##### `JitUserProvGroupMappings`<sup>Required</sup> <a name="JitUserProvGroupMappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvGroupMappings"></a>

```csharp
public DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList JitUserProvGroupMappings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList</a>

---

##### `JitUserProvGroupSamlAttributeName`<sup>Required</sup> <a name="JitUserProvGroupSamlAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvGroupSamlAttributeName"></a>

```csharp
public string JitUserProvGroupSamlAttributeName { get; }
```

- *Type:* string

---

##### `JitUserProvGroupStaticListEnabled`<sup>Required</sup> <a name="JitUserProvGroupStaticListEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvGroupStaticListEnabled"></a>

```csharp
public IResolvable JitUserProvGroupStaticListEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `JitUserProvIgnoreErrorOnAbsentGroups`<sup>Required</sup> <a name="JitUserProvIgnoreErrorOnAbsentGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvIgnoreErrorOnAbsentGroups"></a>

```csharp
public IResolvable JitUserProvIgnoreErrorOnAbsentGroups { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LastNotificationSentTime`<sup>Required</sup> <a name="LastNotificationSentTime" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.lastNotificationSentTime"></a>

```csharp
public string LastNotificationSentTime { get; }
```

- *Type:* string

---

##### `LogoutBinding`<sup>Required</sup> <a name="LogoutBinding" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.logoutBinding"></a>

```csharp
public string LogoutBinding { get; }
```

- *Type:* string

---

##### `LogoutEnabled`<sup>Required</sup> <a name="LogoutEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.logoutEnabled"></a>

```csharp
public IResolvable LogoutEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LogoutRequestUrl`<sup>Required</sup> <a name="LogoutRequestUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.logoutRequestUrl"></a>

```csharp
public string LogoutRequestUrl { get; }
```

- *Type:* string

---

##### `LogoutResponseUrl`<sup>Required</sup> <a name="LogoutResponseUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.logoutResponseUrl"></a>

```csharp
public string LogoutResponseUrl { get; }
```

- *Type:* string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.meta"></a>

```csharp
public DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList Meta { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `NameIdFormat`<sup>Required</sup> <a name="NameIdFormat" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.nameIdFormat"></a>

```csharp
public string NameIdFormat { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `PartnerName`<sup>Required</sup> <a name="PartnerName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.partnerName"></a>

```csharp
public string PartnerName { get; }
```

- *Type:* string

---

##### `PartnerProviderId`<sup>Required</sup> <a name="PartnerProviderId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.partnerProviderId"></a>

```csharp
public string PartnerProviderId { get; }
```

- *Type:* string

---

##### `RequestedAuthenticationContext`<sup>Required</sup> <a name="RequestedAuthenticationContext" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.requestedAuthenticationContext"></a>

```csharp
public string[] RequestedAuthenticationContext { get; }
```

- *Type:* string[]

---

##### `RequireForceAuthn`<sup>Required</sup> <a name="RequireForceAuthn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.requireForceAuthn"></a>

```csharp
public IResolvable RequireForceAuthn { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RequiresEncryptedAssertion`<sup>Required</sup> <a name="RequiresEncryptedAssertion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.requiresEncryptedAssertion"></a>

```csharp
public IResolvable RequiresEncryptedAssertion { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `SamlHoKrequired`<sup>Required</sup> <a name="SamlHoKrequired" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.samlHoKrequired"></a>

```csharp
public IResolvable SamlHoKrequired { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `ServiceInstanceIdentifier`<sup>Required</sup> <a name="ServiceInstanceIdentifier" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.serviceInstanceIdentifier"></a>

```csharp
public string ServiceInstanceIdentifier { get; }
```

- *Type:* string

---

##### `ShownOnLoginPage`<sup>Required</sup> <a name="ShownOnLoginPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.shownOnLoginPage"></a>

```csharp
public IResolvable ShownOnLoginPage { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SignatureHashAlgorithm`<sup>Required</sup> <a name="SignatureHashAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.signatureHashAlgorithm"></a>

```csharp
public string SignatureHashAlgorithm { get; }
```

- *Type:* string

---

##### `SigningCertificate`<sup>Required</sup> <a name="SigningCertificate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.signingCertificate"></a>

```csharp
public string SigningCertificate { get; }
```

- *Type:* string

---

##### `SuccinctId`<sup>Required</sup> <a name="SuccinctId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.succinctId"></a>

```csharp
public string SuccinctId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.tags"></a>

```csharp
public DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.tenancyOcid"></a>

```csharp
public string TenancyOcid { get; }
```

- *Type:* string

---

##### `TenantProviderId`<sup>Required</sup> <a name="TenantProviderId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.tenantProviderId"></a>

```csharp
public string TenantProviderId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider`<sup>Required</sup> <a name="UrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider"></a>

```csharp
public DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList UrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList</a>

---

##### `Urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider`<sup>Required</sup> <a name="Urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider"></a>

```csharp
public DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList Urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList</a>

---

##### `UserMappingMethod`<sup>Required</sup> <a name="UserMappingMethod" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.userMappingMethod"></a>

```csharp
public string UserMappingMethod { get; }
```

- *Type:* string

---

##### `UserMappingStoreAttribute`<sup>Required</sup> <a name="UserMappingStoreAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.userMappingStoreAttribute"></a>

```csharp
public string UserMappingStoreAttribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsIdentityProvidersIdentityProviders InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProviders">DataOciIdentityDomainsIdentityProvidersIdentityProviders</a>

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.get"></a>

```csharp
private DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTags">DataOciIdentityDomainsIdentityProvidersIdentityProvidersTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsIdentityProvidersIdentityProvidersTags InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTags">DataOciIdentityDomainsIdentityProvidersIdentityProvidersTags</a>

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.get"></a>

```csharp
private DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups">DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups">DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups</a>

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.get"></a>

```csharp
private DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accessTokenUrl">AccessTokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accountLinkingEnabled">AccountLinkingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.adminScope">AdminScope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.authzUrl">AuthzUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.autoRedirectEnabled">AutoRedirectEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clientCredentialInPayload">ClientCredentialInPayload</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clockSkewInSeconds">ClockSkewInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerKey">ConsumerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerSecret">ConsumerSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.discoveryUrl">DiscoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.idAttribute">IdAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvAssignedGroups">JitProvAssignedGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvGroupStaticListEnabled">JitProvGroupStaticListEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.profileUrl">ProfileUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.redirectUrl">RedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.registrationEnabled">RegistrationEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.scope">Scope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.serviceProviderName">ServiceProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.socialJitProvisioningEnabled">SocialJitProvisioningEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessTokenUrl`<sup>Required</sup> <a name="AccessTokenUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accessTokenUrl"></a>

```csharp
public string AccessTokenUrl { get; }
```

- *Type:* string

---

##### `AccountLinkingEnabled`<sup>Required</sup> <a name="AccountLinkingEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accountLinkingEnabled"></a>

```csharp
public IResolvable AccountLinkingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AdminScope`<sup>Required</sup> <a name="AdminScope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.adminScope"></a>

```csharp
public string[] AdminScope { get; }
```

- *Type:* string[]

---

##### `AuthzUrl`<sup>Required</sup> <a name="AuthzUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.authzUrl"></a>

```csharp
public string AuthzUrl { get; }
```

- *Type:* string

---

##### `AutoRedirectEnabled`<sup>Required</sup> <a name="AutoRedirectEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.autoRedirectEnabled"></a>

```csharp
public IResolvable AutoRedirectEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ClientCredentialInPayload`<sup>Required</sup> <a name="ClientCredentialInPayload" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clientCredentialInPayload"></a>

```csharp
public IResolvable ClientCredentialInPayload { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ClockSkewInSeconds`<sup>Required</sup> <a name="ClockSkewInSeconds" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clockSkewInSeconds"></a>

```csharp
public double ClockSkewInSeconds { get; }
```

- *Type:* double

---

##### `ConsumerKey`<sup>Required</sup> <a name="ConsumerKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerKey"></a>

```csharp
public string ConsumerKey { get; }
```

- *Type:* string

---

##### `ConsumerSecret`<sup>Required</sup> <a name="ConsumerSecret" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerSecret"></a>

```csharp
public string ConsumerSecret { get; }
```

- *Type:* string

---

##### `DiscoveryUrl`<sup>Required</sup> <a name="DiscoveryUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.discoveryUrl"></a>

```csharp
public string DiscoveryUrl { get; }
```

- *Type:* string

---

##### `IdAttribute`<sup>Required</sup> <a name="IdAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.idAttribute"></a>

```csharp
public string IdAttribute { get; }
```

- *Type:* string

---

##### `JitProvAssignedGroups`<sup>Required</sup> <a name="JitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvAssignedGroups"></a>

```csharp
public DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList JitProvAssignedGroups { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList</a>

---

##### `JitProvGroupStaticListEnabled`<sup>Required</sup> <a name="JitProvGroupStaticListEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvGroupStaticListEnabled"></a>

```csharp
public IResolvable JitProvGroupStaticListEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ProfileUrl`<sup>Required</sup> <a name="ProfileUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.profileUrl"></a>

```csharp
public string ProfileUrl { get; }
```

- *Type:* string

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.redirectUrl"></a>

```csharp
public string RedirectUrl { get; }
```

- *Type:* string

---

##### `RegistrationEnabled`<sup>Required</sup> <a name="RegistrationEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.registrationEnabled"></a>

```csharp
public IResolvable RegistrationEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.scope"></a>

```csharp
public string[] Scope { get; }
```

- *Type:* string[]

---

##### `ServiceProviderName`<sup>Required</sup> <a name="ServiceProviderName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.serviceProviderName"></a>

```csharp
public string ServiceProviderName { get; }
```

- *Type:* string

---

##### `SocialJitProvisioningEnabled`<sup>Required</sup> <a name="SocialJitProvisioningEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.socialJitProvisioningEnabled"></a>

```csharp
public IResolvable SocialJitProvisioningEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a>

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.get"></a>

```csharp
private DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.certMatchAttribute">CertMatchAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlCheckOnOcspFailureEnabled">CrlCheckOnOcspFailureEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlEnabled">CrlEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlLocation">CrlLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlReloadDuration">CrlReloadDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValidationEnabled">EkuValidationEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValues">EkuValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspAllowUnknownResponseStatus">OcspAllowUnknownResponseStatus</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnabled">OcspEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnableSignedResponse">OcspEnableSignedResponse</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspResponderUrl">OcspResponderUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspRevalidateTime">OcspRevalidateTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspServerName">OcspServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspTrustCertChain">OcspTrustCertChain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.otherCertMatchAttribute">OtherCertMatchAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.signingCertificateChain">SigningCertificateChain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.userMatchAttribute">UserMatchAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertMatchAttribute`<sup>Required</sup> <a name="CertMatchAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.certMatchAttribute"></a>

```csharp
public string CertMatchAttribute { get; }
```

- *Type:* string

---

##### `CrlCheckOnOcspFailureEnabled`<sup>Required</sup> <a name="CrlCheckOnOcspFailureEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlCheckOnOcspFailureEnabled"></a>

```csharp
public IResolvable CrlCheckOnOcspFailureEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CrlEnabled`<sup>Required</sup> <a name="CrlEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlEnabled"></a>

```csharp
public IResolvable CrlEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CrlLocation`<sup>Required</sup> <a name="CrlLocation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlLocation"></a>

```csharp
public string CrlLocation { get; }
```

- *Type:* string

---

##### `CrlReloadDuration`<sup>Required</sup> <a name="CrlReloadDuration" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlReloadDuration"></a>

```csharp
public double CrlReloadDuration { get; }
```

- *Type:* double

---

##### `EkuValidationEnabled`<sup>Required</sup> <a name="EkuValidationEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValidationEnabled"></a>

```csharp
public IResolvable EkuValidationEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EkuValues`<sup>Required</sup> <a name="EkuValues" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValues"></a>

```csharp
public string[] EkuValues { get; }
```

- *Type:* string[]

---

##### `OcspAllowUnknownResponseStatus`<sup>Required</sup> <a name="OcspAllowUnknownResponseStatus" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspAllowUnknownResponseStatus"></a>

```csharp
public IResolvable OcspAllowUnknownResponseStatus { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `OcspEnabled`<sup>Required</sup> <a name="OcspEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnabled"></a>

```csharp
public IResolvable OcspEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `OcspEnableSignedResponse`<sup>Required</sup> <a name="OcspEnableSignedResponse" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnableSignedResponse"></a>

```csharp
public IResolvable OcspEnableSignedResponse { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `OcspResponderUrl`<sup>Required</sup> <a name="OcspResponderUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspResponderUrl"></a>

```csharp
public string OcspResponderUrl { get; }
```

- *Type:* string

---

##### `OcspRevalidateTime`<sup>Required</sup> <a name="OcspRevalidateTime" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspRevalidateTime"></a>

```csharp
public double OcspRevalidateTime { get; }
```

- *Type:* double

---

##### `OcspServerName`<sup>Required</sup> <a name="OcspServerName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspServerName"></a>

```csharp
public string OcspServerName { get; }
```

- *Type:* string

---

##### `OcspTrustCertChain`<sup>Required</sup> <a name="OcspTrustCertChain" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspTrustCertChain"></a>

```csharp
public string[] OcspTrustCertChain { get; }
```

- *Type:* string[]

---

##### `OtherCertMatchAttribute`<sup>Required</sup> <a name="OtherCertMatchAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.otherCertMatchAttribute"></a>

```csharp
public string OtherCertMatchAttribute { get; }
```

- *Type:* string

---

##### `SigningCertificateChain`<sup>Required</sup> <a name="SigningCertificateChain" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.signingCertificateChain"></a>

```csharp
public string[] SigningCertificateChain { get; }
```

- *Type:* string[]

---

##### `UserMatchAttribute`<sup>Required</sup> <a name="UserMatchAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.userMatchAttribute"></a>

```csharp
public string UserMatchAttribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a>

---



