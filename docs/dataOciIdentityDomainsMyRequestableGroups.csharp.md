# `dataOciIdentityDomainsMyRequestableGroups` Submodule <a name="`dataOciIdentityDomainsMyRequestableGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsMyRequestableGroups <a name="DataOciIdentityDomainsMyRequestableGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups oci_identity_domains_my_requestable_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroups(Construct Scope, string Id, DataOciIdentityDomainsMyRequestableGroupsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig">DataOciIdentityDomainsMyRequestableGroupsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig">DataOciIdentityDomainsMyRequestableGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetMyRequestableGroupCount">ResetMyRequestableGroupCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetMyRequestableGroupFilter">ResetMyRequestableGroupFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetSortOrder">ResetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetStartIndex">ResetStartIndex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMyRequestableGroupCount` <a name="ResetMyRequestableGroupCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetMyRequestableGroupCount"></a>

```csharp
private void ResetMyRequestableGroupCount()
```

##### `ResetMyRequestableGroupFilter` <a name="ResetMyRequestableGroupFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetMyRequestableGroupFilter"></a>

```csharp
private void ResetMyRequestableGroupFilter()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetResourceTypeSchemaVersion"></a>

```csharp
private void ResetResourceTypeSchemaVersion()
```

##### `ResetSortBy` <a name="ResetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetSortBy"></a>

```csharp
private void ResetSortBy()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetSortOrder"></a>

```csharp
private void ResetSortOrder()
```

##### `ResetStartIndex` <a name="ResetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetStartIndex"></a>

```csharp
private void ResetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsMyRequestableGroups resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsMyRequestableGroups.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsMyRequestableGroups.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsMyRequestableGroups.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsMyRequestableGroups.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciIdentityDomainsMyRequestableGroups resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsMyRequestableGroups to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsMyRequestableGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsMyRequestableGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.itemsPerPage">ItemsPerPage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.myRequestableGroups">MyRequestableGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.totalResults">TotalResults</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.myRequestableGroupCountInput">MyRequestableGroupCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.myRequestableGroupFilterInput">MyRequestableGroupFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.sortByInput">SortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.sortOrderInput">SortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.startIndexInput">StartIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.myRequestableGroupCount">MyRequestableGroupCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.myRequestableGroupFilter">MyRequestableGroupFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.sortBy">SortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.sortOrder">SortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.startIndex">StartIndex</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.itemsPerPage"></a>

```csharp
public double ItemsPerPage { get; }
```

- *Type:* double

---

##### `MyRequestableGroups`<sup>Required</sup> <a name="MyRequestableGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.myRequestableGroups"></a>

```csharp
public DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList MyRequestableGroups { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList</a>

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.totalResults"></a>

```csharp
public double TotalResults { get; }
```

- *Type:* double

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.idcsEndpointInput"></a>

```csharp
public string IdcsEndpointInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MyRequestableGroupCountInput`<sup>Optional</sup> <a name="MyRequestableGroupCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.myRequestableGroupCountInput"></a>

```csharp
public double MyRequestableGroupCountInput { get; }
```

- *Type:* double

---

##### `MyRequestableGroupFilterInput`<sup>Optional</sup> <a name="MyRequestableGroupFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.myRequestableGroupFilterInput"></a>

```csharp
public string MyRequestableGroupFilterInput { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.resourceTypeSchemaVersionInput"></a>

```csharp
public string ResourceTypeSchemaVersionInput { get; }
```

- *Type:* string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.sortByInput"></a>

```csharp
public string SortByInput { get; }
```

- *Type:* string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.sortOrderInput"></a>

```csharp
public string SortOrderInput { get; }
```

- *Type:* string

---

##### `StartIndexInput`<sup>Optional</sup> <a name="StartIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.startIndexInput"></a>

```csharp
public double StartIndexInput { get; }
```

- *Type:* double

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `MyRequestableGroupCount`<sup>Required</sup> <a name="MyRequestableGroupCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.myRequestableGroupCount"></a>

```csharp
public double MyRequestableGroupCount { get; }
```

- *Type:* double

---

##### `MyRequestableGroupFilter`<sup>Required</sup> <a name="MyRequestableGroupFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.myRequestableGroupFilter"></a>

```csharp
public string MyRequestableGroupFilter { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.sortBy"></a>

```csharp
public string SortBy { get; }
```

- *Type:* string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.sortOrder"></a>

```csharp
public string SortOrder { get; }
```

- *Type:* string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.startIndex"></a>

```csharp
public double StartIndex { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsMyRequestableGroupsConfig <a name="DataOciIdentityDomainsMyRequestableGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsConfig {
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
    double MyRequestableGroupCount = null,
    string MyRequestableGroupFilter = null,
    string ResourceTypeSchemaVersion = null,
    string SortBy = null,
    string SortOrder = null,
    double StartIndex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#idcs_endpoint DataOciIdentityDomainsMyRequestableGroups#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#authorization DataOciIdentityDomainsMyRequestableGroups#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#compartment_id DataOciIdentityDomainsMyRequestableGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#id DataOciIdentityDomainsMyRequestableGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.myRequestableGroupCount">MyRequestableGroupCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#my_requestable_group_count DataOciIdentityDomainsMyRequestableGroups#my_requestable_group_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.myRequestableGroupFilter">MyRequestableGroupFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#my_requestable_group_filter DataOciIdentityDomainsMyRequestableGroups#my_requestable_group_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#resource_type_schema_version DataOciIdentityDomainsMyRequestableGroups#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.sortBy">SortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#sort_by DataOciIdentityDomainsMyRequestableGroups#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.sortOrder">SortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#sort_order DataOciIdentityDomainsMyRequestableGroups#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.startIndex">StartIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#start_index DataOciIdentityDomainsMyRequestableGroups#start_index}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#idcs_endpoint DataOciIdentityDomainsMyRequestableGroups#idcs_endpoint}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#authorization DataOciIdentityDomainsMyRequestableGroups#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#compartment_id DataOciIdentityDomainsMyRequestableGroups#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#id DataOciIdentityDomainsMyRequestableGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MyRequestableGroupCount`<sup>Optional</sup> <a name="MyRequestableGroupCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.myRequestableGroupCount"></a>

```csharp
public double MyRequestableGroupCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#my_requestable_group_count DataOciIdentityDomainsMyRequestableGroups#my_requestable_group_count}.

---

##### `MyRequestableGroupFilter`<sup>Optional</sup> <a name="MyRequestableGroupFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.myRequestableGroupFilter"></a>

```csharp
public string MyRequestableGroupFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#my_requestable_group_filter DataOciIdentityDomainsMyRequestableGroups#my_requestable_group_filter}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#resource_type_schema_version DataOciIdentityDomainsMyRequestableGroups#resource_type_schema_version}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.sortBy"></a>

```csharp
public string SortBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#sort_by DataOciIdentityDomainsMyRequestableGroups#sort_by}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.sortOrder"></a>

```csharp
public string SortOrder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#sort_order DataOciIdentityDomainsMyRequestableGroups#sort_order}.

---

##### `StartIndex`<sup>Optional</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.startIndex"></a>

```csharp
public double StartIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#start_index DataOciIdentityDomainsMyRequestableGroups#start_index}.

---

### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroups <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroups {

};
```


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedBy <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedBy {

};
```


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedBy <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedBy {

};
```


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembers <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembers {

};
```


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMeta <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMeta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMeta {

};
```


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTags <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTags {

};
```


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup {

};
```


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles {

};
```


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants {

};
```


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners {

};
```


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy {

};
```


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp {

};
```


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.get"></a>

```csharp
private DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedBy">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedBy">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.get"></a>

```csharp
private DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedBy">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedBy">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.get"></a>

```csharp
private DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.get"></a>

```csharp
private DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.dateAdded">DateAdded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.membershipOcid">MembershipOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembers">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DateAdded`<sup>Required</sup> <a name="DateAdded" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.dateAdded"></a>

```csharp
public string DateAdded { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `MembershipOcid`<sup>Required</sup> <a name="MembershipOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.membershipOcid"></a>

```csharp
public string MembershipOcid { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembers InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembers">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembers</a>

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.get"></a>

```csharp
private DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMeta">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMeta InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMeta">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMeta</a>

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.domainOcid">DomainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.members">Members</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.nonUniqueDisplayName">NonUniqueDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.urnietfparamsscimschemasoracleidcsextensiongroupGroup">UrnietfparamsscimschemasoracleidcsextensiongroupGroup</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionrequestableGroup">UrnietfparamsscimschemasoracleidcsextensionrequestableGroup</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroups">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.compartmentOcid"></a>

```csharp
public string CompartmentOcid { get; }
```

- *Type:* string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.deleteInProgress"></a>

```csharp
public IResolvable DeleteInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.domainOcid"></a>

```csharp
public string DomainOcid { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.idcsCreatedBy"></a>

```csharp
public DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList IdcsCreatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList</a>

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.idcsLastModifiedBy"></a>

```csharp
public DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList IdcsLastModifiedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.idcsLastUpgradedInRelease"></a>

```csharp
public string IdcsLastUpgradedInRelease { get; }
```

- *Type:* string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.idcsPreventedOperations"></a>

```csharp
public string[] IdcsPreventedOperations { get; }
```

- *Type:* string[]

---

##### `Members`<sup>Required</sup> <a name="Members" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.members"></a>

```csharp
public DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList Members { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList</a>

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.meta"></a>

```csharp
public DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList Meta { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList</a>

---

##### `NonUniqueDisplayName`<sup>Required</sup> <a name="NonUniqueDisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.nonUniqueDisplayName"></a>

```csharp
public string NonUniqueDisplayName { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.tags"></a>

```csharp
public DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.tenancyOcid"></a>

```csharp
public string TenancyOcid { get; }
```

- *Type:* string

---

##### `UrnietfparamsscimschemasoracleidcsextensiongroupGroup`<sup>Required</sup> <a name="UrnietfparamsscimschemasoracleidcsextensiongroupGroup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.urnietfparamsscimschemasoracleidcsextensiongroupGroup"></a>

```csharp
public DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList UrnietfparamsscimschemasoracleidcsextensiongroupGroup { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList</a>

---

##### `UrnietfparamsscimschemasoracleidcsextensionrequestableGroup`<sup>Required</sup> <a name="UrnietfparamsscimschemasoracleidcsextensionrequestableGroup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionrequestableGroup"></a>

```csharp
public DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList UrnietfparamsscimschemasoracleidcsextensionrequestableGroup { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroups InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroups">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroups</a>

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.get"></a>

```csharp
private DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTags">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTags InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTags">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTags</a>

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.get"></a>

```csharp
private DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.adminRole">AdminRole</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.appName">AppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.legacyGroupName">LegacyGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminRole`<sup>Required</sup> <a name="AdminRole" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.adminRole"></a>

```csharp
public IResolvable AdminRole { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.appName"></a>

```csharp
public string AppName { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `LegacyGroupName`<sup>Required</sup> <a name="LegacyGroupName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.legacyGroupName"></a>

```csharp
public string LegacyGroupName { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles</a>

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.get"></a>

```csharp
private DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.grantMechanism">GrantMechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `GrantMechanism`<sup>Required</sup> <a name="GrantMechanism" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.grantMechanism"></a>

```csharp
public string GrantMechanism { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants</a>

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.get"></a>

```csharp
private DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.appRoles">AppRoles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.creationMechanism">CreationMechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.grants">Grants</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.owners">Owners</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.passwordPolicy">PasswordPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.syncedFromApp">SyncedFromApp</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppRoles`<sup>Required</sup> <a name="AppRoles" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.appRoles"></a>

```csharp
public DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList AppRoles { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList</a>

---

##### `CreationMechanism`<sup>Required</sup> <a name="CreationMechanism" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.creationMechanism"></a>

```csharp
public string CreationMechanism { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Grants`<sup>Required</sup> <a name="Grants" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.grants"></a>

```csharp
public DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList Grants { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList</a>

---

##### `Owners`<sup>Required</sup> <a name="Owners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.owners"></a>

```csharp
public DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList Owners { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList</a>

---

##### `PasswordPolicy`<sup>Required</sup> <a name="PasswordPolicy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.passwordPolicy"></a>

```csharp
public DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList PasswordPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList</a>

---

##### `SyncedFromApp`<sup>Required</sup> <a name="SyncedFromApp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.syncedFromApp"></a>

```csharp
public DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList SyncedFromApp { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup</a>

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.get"></a>

```csharp
private DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners</a>

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.get"></a>

```csharp
private DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy</a>

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.get"></a>

```csharp
private DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp</a>

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.get"></a>

```csharp
private DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.property.requestable">Requestable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Requestable`<sup>Required</sup> <a name="Requestable" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.property.requestable"></a>

```csharp
public IResolvable Requestable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup</a>

---



