# `dataOciSecurityAttributeSecurityAttributeNamespaces` Submodule <a name="`dataOciSecurityAttributeSecurityAttributeNamespaces` Submodule" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciSecurityAttributeSecurityAttributeNamespaces <a name="DataOciSecurityAttributeSecurityAttributeNamespaces" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces oci_security_attribute_security_attribute_namespaces}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributenamespaces"

dataocisecurityattributesecurityattributenamespaces.NewDataOciSecurityAttributeSecurityAttributeNamespaces(scope Construct, id *string, config DataOciSecurityAttributeSecurityAttributeNamespacesConfig) DataOciSecurityAttributeSecurityAttributeNamespaces
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig">DataOciSecurityAttributeSecurityAttributeNamespacesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetCompartmentIdInSubtree"></a>

```go
func ResetCompartmentIdInSubtree()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetName"></a>

```go
func ResetName()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.resetState"></a>

```go
func ResetState()
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

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributenamespaces"

dataocisecurityattributesecurityattributenamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributenamespaces"

dataocisecurityattributesecurityattributenamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributenamespaces"

dataocisecurityattributesecurityattributenamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributenamespaces"

dataocisecurityattributesecurityattributenamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciSecurityAttributeSecurityAttributeNamespaces resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciSecurityAttributeSecurityAttributeNamespaces to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciSecurityAttributeSecurityAttributeNamespaces that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciSecurityAttributeSecurityAttributeNamespaces to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList">DataOciSecurityAttributeSecurityAttributeNamespacesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.securityAttributeNamespaces">SecurityAttributeNamespaces</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList">DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.filter"></a>

```go
func Filter() DataOciSecurityAttributeSecurityAttributeNamespacesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList">DataOciSecurityAttributeSecurityAttributeNamespacesFilterList</a>

---

##### `SecurityAttributeNamespaces`<sup>Required</sup> <a name="SecurityAttributeNamespaces" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.securityAttributeNamespaces"></a>

```go
func SecurityAttributeNamespaces() DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList">DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentIdInSubtreeInput"></a>

```go
func CompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespaces.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciSecurityAttributeSecurityAttributeNamespacesConfig <a name="DataOciSecurityAttributeSecurityAttributeNamespacesConfig" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributenamespaces"

&dataocisecurityattributesecurityattributenamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	CompartmentIdInSubtree: interface{},
	Filter: interface{},
	Id: *string,
	Name: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#compartment_id DataOciSecurityAttributeSecurityAttributeNamespaces#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#compartment_id_in_subtree DataOciSecurityAttributeSecurityAttributeNamespaces#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#id DataOciSecurityAttributeSecurityAttributeNamespaces#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#name DataOciSecurityAttributeSecurityAttributeNamespaces#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#state DataOciSecurityAttributeSecurityAttributeNamespaces#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#compartment_id DataOciSecurityAttributeSecurityAttributeNamespaces#compartment_id}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.compartmentIdInSubtree"></a>

```go
CompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#compartment_id_in_subtree DataOciSecurityAttributeSecurityAttributeNamespaces#compartment_id_in_subtree}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#filter DataOciSecurityAttributeSecurityAttributeNamespaces#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#id DataOciSecurityAttributeSecurityAttributeNamespaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#name DataOciSecurityAttributeSecurityAttributeNamespaces#name}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#state DataOciSecurityAttributeSecurityAttributeNamespaces#state}.

---

### DataOciSecurityAttributeSecurityAttributeNamespacesFilter <a name="DataOciSecurityAttributeSecurityAttributeNamespacesFilter" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributenamespaces"

&dataocisecurityattributesecurityattributenamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#name DataOciSecurityAttributeSecurityAttributeNamespaces#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#values DataOciSecurityAttributeSecurityAttributeNamespaces#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#regex DataOciSecurityAttributeSecurityAttributeNamespaces#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#name DataOciSecurityAttributeSecurityAttributeNamespaces#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#values DataOciSecurityAttributeSecurityAttributeNamespaces#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespaces#regex DataOciSecurityAttributeSecurityAttributeNamespaces#regex}.

---

### DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces <a name="DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributenamespaces"

&dataocisecurityattributesecurityattributenamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciSecurityAttributeSecurityAttributeNamespacesFilterList <a name="DataOciSecurityAttributeSecurityAttributeNamespacesFilterList" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributenamespaces"

dataocisecurityattributesecurityattributenamespaces.NewDataOciSecurityAttributeSecurityAttributeNamespacesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciSecurityAttributeSecurityAttributeNamespacesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.get"></a>

```go
func Get(index *f64) DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference <a name="DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributenamespaces"

dataocisecurityattributesecurityattributenamespaces.NewDataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList <a name="DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributenamespaces"

dataocisecurityattributesecurityattributenamespaces.NewDataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.get"></a>

```go
func Get(index *f64) DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference <a name="DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributenamespaces"

dataocisecurityattributesecurityattributenamespaces.NewDataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.isRetired">IsRetired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.mode">Mode</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces">DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsRetired`<sup>Required</sup> <a name="IsRetired" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.isRetired"></a>

```go
func IsRetired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.mode"></a>

```go
func Mode() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespacesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespaces.DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces">DataOciSecurityAttributeSecurityAttributeNamespacesSecurityAttributeNamespaces</a>

---



