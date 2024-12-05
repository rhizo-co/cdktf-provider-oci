# `dataOciIdentityDomainsResourceTypeSchemaAttributes` Submodule <a name="`dataOciIdentityDomainsResourceTypeSchemaAttributes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsResourceTypeSchemaAttributes <a name="DataOciIdentityDomainsResourceTypeSchemaAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes oci_identity_domains_resource_type_schema_attributes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsResourceTypeSchemaAttributes(Construct Scope, string Id, DataOciIdentityDomainsResourceTypeSchemaAttributesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig">DataOciIdentityDomainsResourceTypeSchemaAttributesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig">DataOciIdentityDomainsResourceTypeSchemaAttributesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetResourceTypeSchemaAttributeCount">ResetResourceTypeSchemaAttributeCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetResourceTypeSchemaAttributeFilter">ResetResourceTypeSchemaAttributeFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetSortOrder">ResetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetStartIndex">ResetStartIndex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetAttributeSets"></a>

```csharp
private void ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetResourceTypeSchemaAttributeCount` <a name="ResetResourceTypeSchemaAttributeCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetResourceTypeSchemaAttributeCount"></a>

```csharp
private void ResetResourceTypeSchemaAttributeCount()
```

##### `ResetResourceTypeSchemaAttributeFilter` <a name="ResetResourceTypeSchemaAttributeFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetResourceTypeSchemaAttributeFilter"></a>

```csharp
private void ResetResourceTypeSchemaAttributeFilter()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetResourceTypeSchemaVersion"></a>

```csharp
private void ResetResourceTypeSchemaVersion()
```

##### `ResetSortBy` <a name="ResetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetSortBy"></a>

```csharp
private void ResetSortBy()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetSortOrder"></a>

```csharp
private void ResetSortOrder()
```

##### `ResetStartIndex` <a name="ResetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetStartIndex"></a>

```csharp
private void ResetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsResourceTypeSchemaAttributes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsResourceTypeSchemaAttributes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsResourceTypeSchemaAttributes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsResourceTypeSchemaAttributes.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsResourceTypeSchemaAttributes.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciIdentityDomainsResourceTypeSchemaAttributes resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsResourceTypeSchemaAttributes to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsResourceTypeSchemaAttributes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsResourceTypeSchemaAttributes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.itemsPerPage">ItemsPerPage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributes">ResourceTypeSchemaAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.totalResults">TotalResults</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributesInput">AttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeCountInput">ResourceTypeSchemaAttributeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeFilterInput">ResourceTypeSchemaAttributeFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortByInput">SortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortOrderInput">SortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.startIndexInput">StartIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributes">Attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeCount">ResourceTypeSchemaAttributeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeFilter">ResourceTypeSchemaAttributeFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortBy">SortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortOrder">SortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.startIndex">StartIndex</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.itemsPerPage"></a>

```csharp
public double ItemsPerPage { get; }
```

- *Type:* double

---

##### `ResourceTypeSchemaAttributes`<sup>Required</sup> <a name="ResourceTypeSchemaAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributes"></a>

```csharp
public DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList ResourceTypeSchemaAttributes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList</a>

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.totalResults"></a>

```csharp
public double TotalResults { get; }
```

- *Type:* double

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributeSetsInput"></a>

```csharp
public string[] AttributeSetsInput { get; }
```

- *Type:* string[]

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributesInput"></a>

```csharp
public string AttributesInput { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.idcsEndpointInput"></a>

```csharp
public string IdcsEndpointInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaAttributeCountInput`<sup>Optional</sup> <a name="ResourceTypeSchemaAttributeCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeCountInput"></a>

```csharp
public double ResourceTypeSchemaAttributeCountInput { get; }
```

- *Type:* double

---

##### `ResourceTypeSchemaAttributeFilterInput`<sup>Optional</sup> <a name="ResourceTypeSchemaAttributeFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeFilterInput"></a>

```csharp
public string ResourceTypeSchemaAttributeFilterInput { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaVersionInput"></a>

```csharp
public string ResourceTypeSchemaVersionInput { get; }
```

- *Type:* string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortByInput"></a>

```csharp
public string SortByInput { get; }
```

- *Type:* string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortOrderInput"></a>

```csharp
public string SortOrderInput { get; }
```

- *Type:* string

---

##### `StartIndexInput`<sup>Optional</sup> <a name="StartIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.startIndexInput"></a>

```csharp
public double StartIndexInput { get; }
```

- *Type:* double

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributes"></a>

```csharp
public string Attributes { get; }
```

- *Type:* string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; }
```

- *Type:* string[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaAttributeCount`<sup>Required</sup> <a name="ResourceTypeSchemaAttributeCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeCount"></a>

```csharp
public double ResourceTypeSchemaAttributeCount { get; }
```

- *Type:* double

---

##### `ResourceTypeSchemaAttributeFilter`<sup>Required</sup> <a name="ResourceTypeSchemaAttributeFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeFilter"></a>

```csharp
public string ResourceTypeSchemaAttributeFilter { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortBy"></a>

```csharp
public string SortBy { get; }
```

- *Type:* string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortOrder"></a>

```csharp
public string SortOrder { get; }
```

- *Type:* string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.startIndex"></a>

```csharp
public double StartIndex { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsResourceTypeSchemaAttributesConfig <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsResourceTypeSchemaAttributesConfig {
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
    double ResourceTypeSchemaAttributeCount = null,
    string ResourceTypeSchemaAttributeFilter = null,
    string ResourceTypeSchemaVersion = null,
    string SortBy = null,
    string SortOrder = null,
    double StartIndex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#idcs_endpoint DataOciIdentityDomainsResourceTypeSchemaAttributes#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.attributes">Attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#attributes DataOciIdentityDomainsResourceTypeSchemaAttributes#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#attribute_sets DataOciIdentityDomainsResourceTypeSchemaAttributes#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#authorization DataOciIdentityDomainsResourceTypeSchemaAttributes#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#compartment_id DataOciIdentityDomainsResourceTypeSchemaAttributes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#id DataOciIdentityDomainsResourceTypeSchemaAttributes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.resourceTypeSchemaAttributeCount">ResourceTypeSchemaAttributeCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_attribute_count DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_attribute_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.resourceTypeSchemaAttributeFilter">ResourceTypeSchemaAttributeFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_attribute_filter DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_attribute_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_version DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.sortBy">SortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#sort_by DataOciIdentityDomainsResourceTypeSchemaAttributes#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.sortOrder">SortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#sort_order DataOciIdentityDomainsResourceTypeSchemaAttributes#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.startIndex">StartIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#start_index DataOciIdentityDomainsResourceTypeSchemaAttributes#start_index}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#idcs_endpoint DataOciIdentityDomainsResourceTypeSchemaAttributes#idcs_endpoint}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.attributes"></a>

```csharp
public string Attributes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#attributes DataOciIdentityDomainsResourceTypeSchemaAttributes#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#attribute_sets DataOciIdentityDomainsResourceTypeSchemaAttributes#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#authorization DataOciIdentityDomainsResourceTypeSchemaAttributes#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#compartment_id DataOciIdentityDomainsResourceTypeSchemaAttributes#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#id DataOciIdentityDomainsResourceTypeSchemaAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceTypeSchemaAttributeCount`<sup>Optional</sup> <a name="ResourceTypeSchemaAttributeCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.resourceTypeSchemaAttributeCount"></a>

```csharp
public double ResourceTypeSchemaAttributeCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_attribute_count DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_attribute_count}.

---

##### `ResourceTypeSchemaAttributeFilter`<sup>Optional</sup> <a name="ResourceTypeSchemaAttributeFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.resourceTypeSchemaAttributeFilter"></a>

```csharp
public string ResourceTypeSchemaAttributeFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_attribute_filter DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_attribute_filter}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_version DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_version}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.sortBy"></a>

```csharp
public string SortBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#sort_by DataOciIdentityDomainsResourceTypeSchemaAttributes#sort_by}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.sortOrder"></a>

```csharp
public string SortOrder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#sort_order DataOciIdentityDomainsResourceTypeSchemaAttributes#sort_order}.

---

##### `StartIndex`<sup>Optional</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.startIndex"></a>

```csharp
public double StartIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#start_index DataOciIdentityDomainsResourceTypeSchemaAttributes#start_index}.

---

### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes {

};
```


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy {

};
```


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy {

};
```


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta {

};
```


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.get"></a>

```csharp
private DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy</a>

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.get"></a>

```csharp
private DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.get"></a>

```csharp
private DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.get"></a>

```csharp
private DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta</a>

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.canonicalValues">CanonicalValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.caseExact">CaseExact</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.domainOcid">DomainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.endUserMutability">EndUserMutability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.endUserMutabilityAllowedValues">EndUserMutabilityAllowedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAddedSinceReleaseNumber">IdcsAddedSinceReleaseNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAddedSinceVersion">IdcsAddedSinceVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAttributeCacheable">IdcsAttributeCacheable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAttributeMappable">IdcsAttributeMappable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAuditable">IdcsAuditable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAutoIncrementSeqName">IdcsAutoIncrementSeqName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCanonicalValueSourceFilter">IdcsCanonicalValueSourceFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCanonicalValueSourceResourceType">IdcsCanonicalValueSourceResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCompositeKey">IdcsCompositeKey</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCsvColumnHeaderName">IdcsCsvColumnHeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCustomAttribute">IdcsCustomAttribute</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDeprecatedSinceReleaseNumber">IdcsDeprecatedSinceReleaseNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDeprecatedSinceVersion">IdcsDeprecatedSinceVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDisplayName">IdcsDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDisplayNameMessageId">IdcsDisplayNameMessageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsFetchComplexAttributeValues">IdcsFetchComplexAttributeValues</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsFromTargetMapper">IdcsFromTargetMapper</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsFullyQualifiedName">IdcsFullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsGenerated">IdcsGenerated</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIcfAttributeType">IdcsIcfAttributeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIcfBundleAttributeName">IdcsIcfBundleAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIcfRequired">IdcsIcfRequired</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIndirectRefResourceAttributes">IdcsIndirectRefResourceAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsInternal">IdcsInternal</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMaxLength">IdcsMaxLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMaxValue">IdcsMaxValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMinLength">IdcsMinLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMinValue">IdcsMinValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMultiLanguage">IdcsMultiLanguage</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsRefResourceAttribute">IdcsRefResourceAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsRefResourceAttributes">IdcsRefResourceAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsSchemaUrn">IdcsSchemaUrn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsScimCompliant">IdcsScimCompliant</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsSearchable">IdcsSearchable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsSensitive">IdcsSensitive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetAttributeName">IdcsTargetAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetAttributeNameToMigrateFrom">IdcsTargetAttributeNameToMigrateFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetNormAttributeName">IdcsTargetNormAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetUniqueConstraintName">IdcsTargetUniqueConstraintName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsToTargetMapper">IdcsToTargetMapper</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTrimStringValue">IdcsTrimStringValue</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsValidateReference">IdcsValidateReference</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsValuePersisted">IdcsValuePersisted</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.multiValued">MultiValued</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.mutability">Mutability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.referenceTypes">ReferenceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.required">Required</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.returned">Returned</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.uniqueness">Uniqueness</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CanonicalValues`<sup>Required</sup> <a name="CanonicalValues" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.canonicalValues"></a>

```csharp
public string[] CanonicalValues { get; }
```

- *Type:* string[]

---

##### `CaseExact`<sup>Required</sup> <a name="CaseExact" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.caseExact"></a>

```csharp
public IResolvable CaseExact { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.compartmentOcid"></a>

```csharp
public string CompartmentOcid { get; }
```

- *Type:* string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.deleteInProgress"></a>

```csharp
public IResolvable DeleteInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.domainOcid"></a>

```csharp
public string DomainOcid { get; }
```

- *Type:* string

---

##### `EndUserMutability`<sup>Required</sup> <a name="EndUserMutability" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.endUserMutability"></a>

```csharp
public string EndUserMutability { get; }
```

- *Type:* string

---

##### `EndUserMutabilityAllowedValues`<sup>Required</sup> <a name="EndUserMutabilityAllowedValues" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.endUserMutabilityAllowedValues"></a>

```csharp
public string[] EndUserMutabilityAllowedValues { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsAddedSinceReleaseNumber`<sup>Required</sup> <a name="IdcsAddedSinceReleaseNumber" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAddedSinceReleaseNumber"></a>

```csharp
public string IdcsAddedSinceReleaseNumber { get; }
```

- *Type:* string

---

##### `IdcsAddedSinceVersion`<sup>Required</sup> <a name="IdcsAddedSinceVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAddedSinceVersion"></a>

```csharp
public double IdcsAddedSinceVersion { get; }
```

- *Type:* double

---

##### `IdcsAttributeCacheable`<sup>Required</sup> <a name="IdcsAttributeCacheable" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAttributeCacheable"></a>

```csharp
public IResolvable IdcsAttributeCacheable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IdcsAttributeMappable`<sup>Required</sup> <a name="IdcsAttributeMappable" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAttributeMappable"></a>

```csharp
public IResolvable IdcsAttributeMappable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IdcsAuditable`<sup>Required</sup> <a name="IdcsAuditable" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAuditable"></a>

```csharp
public IResolvable IdcsAuditable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IdcsAutoIncrementSeqName`<sup>Required</sup> <a name="IdcsAutoIncrementSeqName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAutoIncrementSeqName"></a>

```csharp
public string IdcsAutoIncrementSeqName { get; }
```

- *Type:* string

---

##### `IdcsCanonicalValueSourceFilter`<sup>Required</sup> <a name="IdcsCanonicalValueSourceFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCanonicalValueSourceFilter"></a>

```csharp
public string IdcsCanonicalValueSourceFilter { get; }
```

- *Type:* string

---

##### `IdcsCanonicalValueSourceResourceType`<sup>Required</sup> <a name="IdcsCanonicalValueSourceResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCanonicalValueSourceResourceType"></a>

```csharp
public string IdcsCanonicalValueSourceResourceType { get; }
```

- *Type:* string

---

##### `IdcsCompositeKey`<sup>Required</sup> <a name="IdcsCompositeKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCompositeKey"></a>

```csharp
public string[] IdcsCompositeKey { get; }
```

- *Type:* string[]

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCreatedBy"></a>

```csharp
public DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList IdcsCreatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList</a>

---

##### `IdcsCsvColumnHeaderName`<sup>Required</sup> <a name="IdcsCsvColumnHeaderName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCsvColumnHeaderName"></a>

```csharp
public string IdcsCsvColumnHeaderName { get; }
```

- *Type:* string

---

##### `IdcsCustomAttribute`<sup>Required</sup> <a name="IdcsCustomAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCustomAttribute"></a>

```csharp
public IResolvable IdcsCustomAttribute { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IdcsDeprecatedSinceReleaseNumber`<sup>Required</sup> <a name="IdcsDeprecatedSinceReleaseNumber" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDeprecatedSinceReleaseNumber"></a>

```csharp
public string IdcsDeprecatedSinceReleaseNumber { get; }
```

- *Type:* string

---

##### `IdcsDeprecatedSinceVersion`<sup>Required</sup> <a name="IdcsDeprecatedSinceVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDeprecatedSinceVersion"></a>

```csharp
public double IdcsDeprecatedSinceVersion { get; }
```

- *Type:* double

---

##### `IdcsDisplayName`<sup>Required</sup> <a name="IdcsDisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDisplayName"></a>

```csharp
public string IdcsDisplayName { get; }
```

- *Type:* string

---

##### `IdcsDisplayNameMessageId`<sup>Required</sup> <a name="IdcsDisplayNameMessageId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDisplayNameMessageId"></a>

```csharp
public string IdcsDisplayNameMessageId { get; }
```

- *Type:* string

---

##### `IdcsFetchComplexAttributeValues`<sup>Required</sup> <a name="IdcsFetchComplexAttributeValues" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsFetchComplexAttributeValues"></a>

```csharp
public IResolvable IdcsFetchComplexAttributeValues { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IdcsFromTargetMapper`<sup>Required</sup> <a name="IdcsFromTargetMapper" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsFromTargetMapper"></a>

```csharp
public string IdcsFromTargetMapper { get; }
```

- *Type:* string

---

##### `IdcsFullyQualifiedName`<sup>Required</sup> <a name="IdcsFullyQualifiedName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsFullyQualifiedName"></a>

```csharp
public string IdcsFullyQualifiedName { get; }
```

- *Type:* string

---

##### `IdcsGenerated`<sup>Required</sup> <a name="IdcsGenerated" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsGenerated"></a>

```csharp
public IResolvable IdcsGenerated { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IdcsIcfAttributeType`<sup>Required</sup> <a name="IdcsIcfAttributeType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIcfAttributeType"></a>

```csharp
public string IdcsIcfAttributeType { get; }
```

- *Type:* string

---

##### `IdcsIcfBundleAttributeName`<sup>Required</sup> <a name="IdcsIcfBundleAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIcfBundleAttributeName"></a>

```csharp
public string IdcsIcfBundleAttributeName { get; }
```

- *Type:* string

---

##### `IdcsIcfRequired`<sup>Required</sup> <a name="IdcsIcfRequired" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIcfRequired"></a>

```csharp
public IResolvable IdcsIcfRequired { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IdcsIndirectRefResourceAttributes`<sup>Required</sup> <a name="IdcsIndirectRefResourceAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIndirectRefResourceAttributes"></a>

```csharp
public string[] IdcsIndirectRefResourceAttributes { get; }
```

- *Type:* string[]

---

##### `IdcsInternal`<sup>Required</sup> <a name="IdcsInternal" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsInternal"></a>

```csharp
public IResolvable IdcsInternal { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsLastModifiedBy"></a>

```csharp
public DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList IdcsLastModifiedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsLastUpgradedInRelease"></a>

```csharp
public string IdcsLastUpgradedInRelease { get; }
```

- *Type:* string

---

##### `IdcsMaxLength`<sup>Required</sup> <a name="IdcsMaxLength" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMaxLength"></a>

```csharp
public double IdcsMaxLength { get; }
```

- *Type:* double

---

##### `IdcsMaxValue`<sup>Required</sup> <a name="IdcsMaxValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMaxValue"></a>

```csharp
public double IdcsMaxValue { get; }
```

- *Type:* double

---

##### `IdcsMinLength`<sup>Required</sup> <a name="IdcsMinLength" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMinLength"></a>

```csharp
public double IdcsMinLength { get; }
```

- *Type:* double

---

##### `IdcsMinValue`<sup>Required</sup> <a name="IdcsMinValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMinValue"></a>

```csharp
public double IdcsMinValue { get; }
```

- *Type:* double

---

##### `IdcsMultiLanguage`<sup>Required</sup> <a name="IdcsMultiLanguage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMultiLanguage"></a>

```csharp
public IResolvable IdcsMultiLanguage { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsPreventedOperations"></a>

```csharp
public string[] IdcsPreventedOperations { get; }
```

- *Type:* string[]

---

##### `IdcsRefResourceAttribute`<sup>Required</sup> <a name="IdcsRefResourceAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsRefResourceAttribute"></a>

```csharp
public string IdcsRefResourceAttribute { get; }
```

- *Type:* string

---

##### `IdcsRefResourceAttributes`<sup>Required</sup> <a name="IdcsRefResourceAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsRefResourceAttributes"></a>

```csharp
public string[] IdcsRefResourceAttributes { get; }
```

- *Type:* string[]

---

##### `IdcsSchemaUrn`<sup>Required</sup> <a name="IdcsSchemaUrn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsSchemaUrn"></a>

```csharp
public string IdcsSchemaUrn { get; }
```

- *Type:* string

---

##### `IdcsScimCompliant`<sup>Required</sup> <a name="IdcsScimCompliant" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsScimCompliant"></a>

```csharp
public IResolvable IdcsScimCompliant { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IdcsSearchable`<sup>Required</sup> <a name="IdcsSearchable" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsSearchable"></a>

```csharp
public IResolvable IdcsSearchable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IdcsSensitive`<sup>Required</sup> <a name="IdcsSensitive" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsSensitive"></a>

```csharp
public string IdcsSensitive { get; }
```

- *Type:* string

---

##### `IdcsTargetAttributeName`<sup>Required</sup> <a name="IdcsTargetAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetAttributeName"></a>

```csharp
public string IdcsTargetAttributeName { get; }
```

- *Type:* string

---

##### `IdcsTargetAttributeNameToMigrateFrom`<sup>Required</sup> <a name="IdcsTargetAttributeNameToMigrateFrom" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetAttributeNameToMigrateFrom"></a>

```csharp
public string IdcsTargetAttributeNameToMigrateFrom { get; }
```

- *Type:* string

---

##### `IdcsTargetNormAttributeName`<sup>Required</sup> <a name="IdcsTargetNormAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetNormAttributeName"></a>

```csharp
public string IdcsTargetNormAttributeName { get; }
```

- *Type:* string

---

##### `IdcsTargetUniqueConstraintName`<sup>Required</sup> <a name="IdcsTargetUniqueConstraintName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetUniqueConstraintName"></a>

```csharp
public string IdcsTargetUniqueConstraintName { get; }
```

- *Type:* string

---

##### `IdcsToTargetMapper`<sup>Required</sup> <a name="IdcsToTargetMapper" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsToTargetMapper"></a>

```csharp
public string IdcsToTargetMapper { get; }
```

- *Type:* string

---

##### `IdcsTrimStringValue`<sup>Required</sup> <a name="IdcsTrimStringValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTrimStringValue"></a>

```csharp
public IResolvable IdcsTrimStringValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IdcsValidateReference`<sup>Required</sup> <a name="IdcsValidateReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsValidateReference"></a>

```csharp
public IResolvable IdcsValidateReference { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IdcsValuePersisted`<sup>Required</sup> <a name="IdcsValuePersisted" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsValuePersisted"></a>

```csharp
public IResolvable IdcsValuePersisted { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.meta"></a>

```csharp
public DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList Meta { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList</a>

---

##### `MultiValued`<sup>Required</sup> <a name="MultiValued" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.multiValued"></a>

```csharp
public IResolvable MultiValued { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Mutability`<sup>Required</sup> <a name="Mutability" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.mutability"></a>

```csharp
public string Mutability { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `ReferenceTypes`<sup>Required</sup> <a name="ReferenceTypes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.referenceTypes"></a>

```csharp
public string[] ReferenceTypes { get; }
```

- *Type:* string[]

---

##### `Required`<sup>Required</sup> <a name="Required" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.required"></a>

```csharp
public IResolvable Required { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Returned`<sup>Required</sup> <a name="Returned" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.returned"></a>

```csharp
public string Returned { get; }
```

- *Type:* string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.tags"></a>

```csharp
public DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.tenancyOcid"></a>

```csharp
public string TenancyOcid { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Uniqueness`<sup>Required</sup> <a name="Uniqueness" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.uniqueness"></a>

```csharp
public string Uniqueness { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes</a>

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.get"></a>

```csharp
private DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags</a>

---



