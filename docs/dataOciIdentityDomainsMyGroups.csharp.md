# `dataOciIdentityDomainsMyGroups` Submodule <a name="`dataOciIdentityDomainsMyGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsMyGroups <a name="DataOciIdentityDomainsMyGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_groups oci_identity_domains_my_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroups(Construct Scope, string Id, DataOciIdentityDomainsMyGroupsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig">DataOciIdentityDomainsMyGroupsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig">DataOciIdentityDomainsMyGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.resetMyGroupCount">ResetMyGroupCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.resetMyGroupFilter">ResetMyGroupFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.resetSortOrder">ResetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.resetStartIndex">ResetStartIndex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.resetAttributeSets"></a>

```csharp
private void ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMyGroupCount` <a name="ResetMyGroupCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.resetMyGroupCount"></a>

```csharp
private void ResetMyGroupCount()
```

##### `ResetMyGroupFilter` <a name="ResetMyGroupFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.resetMyGroupFilter"></a>

```csharp
private void ResetMyGroupFilter()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.resetResourceTypeSchemaVersion"></a>

```csharp
private void ResetResourceTypeSchemaVersion()
```

##### `ResetSortBy` <a name="ResetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.resetSortBy"></a>

```csharp
private void ResetSortBy()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.resetSortOrder"></a>

```csharp
private void ResetSortOrder()
```

##### `ResetStartIndex` <a name="ResetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.resetStartIndex"></a>

```csharp
private void ResetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsMyGroups resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsMyGroups.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsMyGroups.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsMyGroups.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsMyGroups.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciIdentityDomainsMyGroups resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsMyGroups to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsMyGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_groups#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsMyGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.itemsPerPage">ItemsPerPage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.myGroups">MyGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsList">DataOciIdentityDomainsMyGroupsMyGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.totalResults">TotalResults</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.attributesInput">AttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.myGroupCountInput">MyGroupCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.myGroupFilterInput">MyGroupFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.sortByInput">SortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.sortOrderInput">SortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.startIndexInput">StartIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.attributes">Attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.myGroupCount">MyGroupCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.myGroupFilter">MyGroupFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.sortBy">SortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.sortOrder">SortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.startIndex">StartIndex</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.itemsPerPage"></a>

```csharp
public double ItemsPerPage { get; }
```

- *Type:* double

---

##### `MyGroups`<sup>Required</sup> <a name="MyGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.myGroups"></a>

```csharp
public DataOciIdentityDomainsMyGroupsMyGroupsList MyGroups { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsList">DataOciIdentityDomainsMyGroupsMyGroupsList</a>

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.totalResults"></a>

```csharp
public double TotalResults { get; }
```

- *Type:* double

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.attributeSetsInput"></a>

```csharp
public string[] AttributeSetsInput { get; }
```

- *Type:* string[]

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.attributesInput"></a>

```csharp
public string AttributesInput { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.idcsEndpointInput"></a>

```csharp
public string IdcsEndpointInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MyGroupCountInput`<sup>Optional</sup> <a name="MyGroupCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.myGroupCountInput"></a>

```csharp
public double MyGroupCountInput { get; }
```

- *Type:* double

---

##### `MyGroupFilterInput`<sup>Optional</sup> <a name="MyGroupFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.myGroupFilterInput"></a>

```csharp
public string MyGroupFilterInput { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.resourceTypeSchemaVersionInput"></a>

```csharp
public string ResourceTypeSchemaVersionInput { get; }
```

- *Type:* string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.sortByInput"></a>

```csharp
public string SortByInput { get; }
```

- *Type:* string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.sortOrderInput"></a>

```csharp
public string SortOrderInput { get; }
```

- *Type:* string

---

##### `StartIndexInput`<sup>Optional</sup> <a name="StartIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.startIndexInput"></a>

```csharp
public double StartIndexInput { get; }
```

- *Type:* double

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.attributes"></a>

```csharp
public string Attributes { get; }
```

- *Type:* string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; }
```

- *Type:* string[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `MyGroupCount`<sup>Required</sup> <a name="MyGroupCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.myGroupCount"></a>

```csharp
public double MyGroupCount { get; }
```

- *Type:* double

---

##### `MyGroupFilter`<sup>Required</sup> <a name="MyGroupFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.myGroupFilter"></a>

```csharp
public string MyGroupFilter { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.sortBy"></a>

```csharp
public string SortBy { get; }
```

- *Type:* string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.sortOrder"></a>

```csharp
public string SortOrder { get; }
```

- *Type:* string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.startIndex"></a>

```csharp
public double StartIndex { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroups.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsMyGroupsConfig <a name="DataOciIdentityDomainsMyGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsConfig {
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
    double MyGroupCount = null,
    string MyGroupFilter = null,
    string ResourceTypeSchemaVersion = null,
    string SortBy = null,
    string SortOrder = null,
    double StartIndex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_groups#idcs_endpoint DataOciIdentityDomainsMyGroups#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.attributes">Attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_groups#attributes DataOciIdentityDomainsMyGroups#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_groups#attribute_sets DataOciIdentityDomainsMyGroups#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_groups#authorization DataOciIdentityDomainsMyGroups#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_groups#compartment_id DataOciIdentityDomainsMyGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_groups#id DataOciIdentityDomainsMyGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.myGroupCount">MyGroupCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_groups#my_group_count DataOciIdentityDomainsMyGroups#my_group_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.myGroupFilter">MyGroupFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_groups#my_group_filter DataOciIdentityDomainsMyGroups#my_group_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_groups#resource_type_schema_version DataOciIdentityDomainsMyGroups#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.sortBy">SortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_groups#sort_by DataOciIdentityDomainsMyGroups#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.sortOrder">SortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_groups#sort_order DataOciIdentityDomainsMyGroups#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.startIndex">StartIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_groups#start_index DataOciIdentityDomainsMyGroups#start_index}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_groups#idcs_endpoint DataOciIdentityDomainsMyGroups#idcs_endpoint}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.attributes"></a>

```csharp
public string Attributes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_groups#attributes DataOciIdentityDomainsMyGroups#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_groups#attribute_sets DataOciIdentityDomainsMyGroups#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_groups#authorization DataOciIdentityDomainsMyGroups#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_groups#compartment_id DataOciIdentityDomainsMyGroups#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_groups#id DataOciIdentityDomainsMyGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MyGroupCount`<sup>Optional</sup> <a name="MyGroupCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.myGroupCount"></a>

```csharp
public double MyGroupCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_groups#my_group_count DataOciIdentityDomainsMyGroups#my_group_count}.

---

##### `MyGroupFilter`<sup>Optional</sup> <a name="MyGroupFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.myGroupFilter"></a>

```csharp
public string MyGroupFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_groups#my_group_filter DataOciIdentityDomainsMyGroups#my_group_filter}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_groups#resource_type_schema_version DataOciIdentityDomainsMyGroups#resource_type_schema_version}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.sortBy"></a>

```csharp
public string SortBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_groups#sort_by DataOciIdentityDomainsMyGroups#sort_by}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.sortOrder"></a>

```csharp
public string SortOrder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_groups#sort_order DataOciIdentityDomainsMyGroups#sort_order}.

---

##### `StartIndex`<sup>Optional</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsConfig.property.startIndex"></a>

```csharp
public double StartIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_groups#start_index DataOciIdentityDomainsMyGroups#start_index}.

---

### DataOciIdentityDomainsMyGroupsMyGroups <a name="DataOciIdentityDomainsMyGroupsMyGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroups {

};
```


### DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedBy <a name="DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedBy {

};
```


### DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedBy <a name="DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedBy {

};
```


### DataOciIdentityDomainsMyGroupsMyGroupsMembers <a name="DataOciIdentityDomainsMyGroupsMyGroupsMembers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsMembers {

};
```


### DataOciIdentityDomainsMyGroupsMyGroupsMeta <a name="DataOciIdentityDomainsMyGroupsMyGroupsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMeta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsMeta {

};
```


### DataOciIdentityDomainsMyGroupsMyGroupsTags <a name="DataOciIdentityDomainsMyGroupsMyGroupsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsTags {

};
```


### DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup <a name="DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup {

};
```


### DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles <a name="DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles {

};
```


### DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants <a name="DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants {

};
```


### DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners <a name="DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners {

};
```


### DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy <a name="DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy {

};
```


### DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp <a name="DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp {

};
```


### DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroup <a name="DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroup"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroup {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList <a name="DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList.get"></a>

```csharp
private DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedBy">DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedBy">DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList <a name="DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList.get"></a>

```csharp
private DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedBy">DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedBy">DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsMyGroupsMyGroupsList <a name="DataOciIdentityDomainsMyGroupsMyGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsList.get"></a>

```csharp
private DataOciIdentityDomainsMyGroupsMyGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyGroupsMyGroupsMembersList <a name="DataOciIdentityDomainsMyGroupsMyGroupsMembersList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsMembersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersList.get"></a>

```csharp
private DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference <a name="DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.property.dateAdded">DateAdded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.property.membershipOcid">MembershipOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembers">DataOciIdentityDomainsMyGroupsMyGroupsMembers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DateAdded`<sup>Required</sup> <a name="DateAdded" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.property.dateAdded"></a>

```csharp
public string DateAdded { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `MembershipOcid`<sup>Required</sup> <a name="MembershipOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.property.membershipOcid"></a>

```csharp
public string MembershipOcid { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyGroupsMyGroupsMembers InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembers">DataOciIdentityDomainsMyGroupsMyGroupsMembers</a>

---


### DataOciIdentityDomainsMyGroupsMyGroupsMetaList <a name="DataOciIdentityDomainsMyGroupsMyGroupsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsMetaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaList.get"></a>

```csharp
private DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference <a name="DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMeta">DataOciIdentityDomainsMyGroupsMyGroupsMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyGroupsMyGroupsMeta InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMeta">DataOciIdentityDomainsMyGroupsMyGroupsMeta</a>

---


### DataOciIdentityDomainsMyGroupsMyGroupsOutputReference <a name="DataOciIdentityDomainsMyGroupsMyGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.domainOcid">DomainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList">DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList">DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.members">Members</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersList">DataOciIdentityDomainsMyGroupsMyGroupsMembersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaList">DataOciIdentityDomainsMyGroupsMyGroupsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.nonUniqueDisplayName">NonUniqueDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsList">DataOciIdentityDomainsMyGroupsMyGroupsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.urnietfparamsscimschemasoracleidcsextensiongroupGroup">UrnietfparamsscimschemasoracleidcsextensiongroupGroup</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList">DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionposixGroup">UrnietfparamsscimschemasoracleidcsextensionposixGroup</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList">DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroups">DataOciIdentityDomainsMyGroupsMyGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.compartmentOcid"></a>

```csharp
public string CompartmentOcid { get; }
```

- *Type:* string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.deleteInProgress"></a>

```csharp
public IResolvable DeleteInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.domainOcid"></a>

```csharp
public string DomainOcid { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.idcsCreatedBy"></a>

```csharp
public DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList IdcsCreatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList">DataOciIdentityDomainsMyGroupsMyGroupsIdcsCreatedByList</a>

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.idcsLastModifiedBy"></a>

```csharp
public DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList IdcsLastModifiedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList">DataOciIdentityDomainsMyGroupsMyGroupsIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.idcsLastUpgradedInRelease"></a>

```csharp
public string IdcsLastUpgradedInRelease { get; }
```

- *Type:* string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.idcsPreventedOperations"></a>

```csharp
public string[] IdcsPreventedOperations { get; }
```

- *Type:* string[]

---

##### `Members`<sup>Required</sup> <a name="Members" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.members"></a>

```csharp
public DataOciIdentityDomainsMyGroupsMyGroupsMembersList Members { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMembersList">DataOciIdentityDomainsMyGroupsMyGroupsMembersList</a>

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.meta"></a>

```csharp
public DataOciIdentityDomainsMyGroupsMyGroupsMetaList Meta { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsMetaList">DataOciIdentityDomainsMyGroupsMyGroupsMetaList</a>

---

##### `NonUniqueDisplayName`<sup>Required</sup> <a name="NonUniqueDisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.nonUniqueDisplayName"></a>

```csharp
public string NonUniqueDisplayName { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.tags"></a>

```csharp
public DataOciIdentityDomainsMyGroupsMyGroupsTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsList">DataOciIdentityDomainsMyGroupsMyGroupsTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.tenancyOcid"></a>

```csharp
public string TenancyOcid { get; }
```

- *Type:* string

---

##### `UrnietfparamsscimschemasoracleidcsextensiongroupGroup`<sup>Required</sup> <a name="UrnietfparamsscimschemasoracleidcsextensiongroupGroup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.urnietfparamsscimschemasoracleidcsextensiongroupGroup"></a>

```csharp
public DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList UrnietfparamsscimschemasoracleidcsextensiongroupGroup { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList">DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList</a>

---

##### `UrnietfparamsscimschemasoracleidcsextensionposixGroup`<sup>Required</sup> <a name="UrnietfparamsscimschemasoracleidcsextensionposixGroup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionposixGroup"></a>

```csharp
public DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList UrnietfparamsscimschemasoracleidcsextensionposixGroup { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList">DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyGroupsMyGroups InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroups">DataOciIdentityDomainsMyGroupsMyGroups</a>

---


### DataOciIdentityDomainsMyGroupsMyGroupsTagsList <a name="DataOciIdentityDomainsMyGroupsMyGroupsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsList.get"></a>

```csharp
private DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference <a name="DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTags">DataOciIdentityDomainsMyGroupsMyGroupsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTagsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyGroupsMyGroupsTags InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsTags">DataOciIdentityDomainsMyGroupsMyGroupsTags</a>

---


### DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList <a name="DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.get"></a>

```csharp
private DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference <a name="DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.adminRole">AdminRole</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.appName">AppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.legacyGroupName">LegacyGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles">DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminRole`<sup>Required</sup> <a name="AdminRole" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.adminRole"></a>

```csharp
public IResolvable AdminRole { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.appName"></a>

```csharp
public string AppName { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `LegacyGroupName`<sup>Required</sup> <a name="LegacyGroupName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.legacyGroupName"></a>

```csharp
public string LegacyGroupName { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles">DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles</a>

---


### DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList <a name="DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.get"></a>

```csharp
private DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference <a name="DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.grantMechanism">GrantMechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants">DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `GrantMechanism`<sup>Required</sup> <a name="GrantMechanism" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.grantMechanism"></a>

```csharp
public string GrantMechanism { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants">DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants</a>

---


### DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList <a name="DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.get"></a>

```csharp
private DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference <a name="DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.appRoles">AppRoles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList">DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.creationMechanism">CreationMechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.grants">Grants</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList">DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.owners">Owners</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList">DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.passwordPolicy">PasswordPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList">DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.syncedFromApp">SyncedFromApp</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList">DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup">DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppRoles`<sup>Required</sup> <a name="AppRoles" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.appRoles"></a>

```csharp
public DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList AppRoles { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList">DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList</a>

---

##### `CreationMechanism`<sup>Required</sup> <a name="CreationMechanism" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.creationMechanism"></a>

```csharp
public string CreationMechanism { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Grants`<sup>Required</sup> <a name="Grants" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.grants"></a>

```csharp
public DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList Grants { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList">DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList</a>

---

##### `Owners`<sup>Required</sup> <a name="Owners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.owners"></a>

```csharp
public DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList Owners { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList">DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList</a>

---

##### `PasswordPolicy`<sup>Required</sup> <a name="PasswordPolicy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.passwordPolicy"></a>

```csharp
public DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList PasswordPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList">DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList</a>

---

##### `SyncedFromApp`<sup>Required</sup> <a name="SyncedFromApp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.syncedFromApp"></a>

```csharp
public DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList SyncedFromApp { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList">DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup">DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup</a>

---


### DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList <a name="DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.get"></a>

```csharp
private DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference <a name="DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners">DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners">DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners</a>

---


### DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList <a name="DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.get"></a>

```csharp
private DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference <a name="DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy">DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy">DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy</a>

---


### DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList <a name="DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.get"></a>

```csharp
private DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference <a name="DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp">DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp">DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp</a>

---


### DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList <a name="DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.get"></a>

```csharp
private DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference <a name="DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.property.gidNumber">GidNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroup">DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GidNumber`<sup>Required</sup> <a name="GidNumber" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.property.gidNumber"></a>

```csharp
public double GidNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroup InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyGroups.DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroup">DataOciIdentityDomainsMyGroupsMyGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroup</a>

---



