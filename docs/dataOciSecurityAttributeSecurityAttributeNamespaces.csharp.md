# `dataOciSecurityAttributeSecurityAttributeNamespaces` Submodule <a name="`dataOciSecurityAttributeSecurityAttributeNamespaces` Submodule" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciSecurityAttributeSecurityAttributeNamespaces <a name="DataOciSecurityAttributeSecurityAttributeNamespaces" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces oci_security_attribute_security_attribute_namespaces}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSecurityAttributeSecurityAttributeNamespaces(Construct Scope, string Id, DataOciSecurityAttributeSecurityAttributeNamespacesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig">DataOciSecurityAttributeSecurityAttributeNamespacesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig">DataOciSecurityAttributeSecurityAttributeNamespacesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetCompartmentIdInSubtree"></a>

```csharp
private void ResetCompartmentIdInSubtree()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciSecurityAttributeSecurityAttributeNamespaces resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciSecurityAttributeSecurityAttributeNamespaces.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciSecurityAttributeSecurityAttributeNamespaces.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciSecurityAttributeSecurityAttributeNamespaces.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciSecurityAttributeSecurityAttributeNamespaces.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciSecurityAttributeSecurityAttributeNamespaces resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciSecurityAttributeSecurityAttributeNamespaces to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciSecurityAttributeSecurityAttributeNamespaces that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciSecurityAttributeSecurityAttributeNamespaces to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList">DataOciSecurityAttributeSecurityAttributeNamespacesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.securityAttributeNamespaces">SecurityAttributeNamespaces</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList">DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.filter"></a>

```csharp
public DataOciSecurityAttributeSecurityAttributeNamespacesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList">DataOciSecurityAttributeSecurityAttributeNamespacesFilterList</a>

---

##### `SecurityAttributeNamespaces`<sup>Required</sup> <a name="SecurityAttributeNamespaces" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.securityAttributeNamespaces"></a>

```csharp
public DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList SecurityAttributeNamespaces { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList">DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentIdInSubtreeInput"></a>

```csharp
public object CompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciSecurityAttributeSecurityAttributeNamespacesConfig <a name="DataOciSecurityAttributeSecurityAttributeNamespacesConfig" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSecurityAttributeSecurityAttributeNamespacesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId = null,
    object CompartmentIdInSubtree = null,
    object Filter = null,
    string Id = null,
    string Name = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#compartment_id DataOciSecurityAttributeSecurityAttributeNamespaces#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#compartment_id_in_subtree DataOciSecurityAttributeSecurityAttributeNamespaces#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#id DataOciSecurityAttributeSecurityAttributeNamespaces#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#name DataOciSecurityAttributeSecurityAttributeNamespaces#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#state DataOciSecurityAttributeSecurityAttributeNamespaces#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#compartment_id DataOciSecurityAttributeSecurityAttributeNamespaces#compartment_id}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#compartment_id_in_subtree DataOciSecurityAttributeSecurityAttributeNamespaces#compartment_id_in_subtree}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#filter DataOciSecurityAttributeSecurityAttributeNamespaces#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#id DataOciSecurityAttributeSecurityAttributeNamespaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#name DataOciSecurityAttributeSecurityAttributeNamespaces#name}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#state DataOciSecurityAttributeSecurityAttributeNamespaces#state}.

---

### DataOciSecurityAttributeSecurityAttributeNamespacesFilter <a name="DataOciSecurityAttributeSecurityAttributeNamespacesFilter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSecurityAttributeSecurityAttributeNamespacesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#name DataOciSecurityAttributeSecurityAttributeNamespaces#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#values DataOciSecurityAttributeSecurityAttributeNamespaces#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#regex DataOciSecurityAttributeSecurityAttributeNamespaces#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#name DataOciSecurityAttributeSecurityAttributeNamespaces#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#values DataOciSecurityAttributeSecurityAttributeNamespaces#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#regex DataOciSecurityAttributeSecurityAttributeNamespaces#regex}.

---

### DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces <a name="DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciSecurityAttributeSecurityAttributeNamespacesFilterList <a name="DataOciSecurityAttributeSecurityAttributeNamespacesFilterList" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSecurityAttributeSecurityAttributeNamespacesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.get"></a>

```csharp
private DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference <a name="DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList <a name="DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.get"></a>

```csharp
private DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference <a name="DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.isRetired">IsRetired</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.mode">Mode</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces">DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsRetired`<sup>Required</sup> <a name="IsRetired" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.isRetired"></a>

```csharp
public IResolvable IsRetired { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.mode"></a>

```csharp
public string[] Mode { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.internalValue"></a>

```csharp
public DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces">DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces</a>

---



